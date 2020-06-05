package com.marianhello.bgloc;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Build;
import android.support.v4.app.NotificationCompat;

import com.marianhello.logging.LoggerManager;

public class NotificationHelper {

    public static class NotificationFactory {
        private Context mContext;
        private ResourceResolver mResolver;

        private org.slf4j.Logger logger;

        public NotificationFactory(Context context) {
            mContext = context;
            mResolver = ResourceResolver.newInstance(context);
            logger =  LoggerManager.getLogger(NotificationFactory.class);
        }

        private Integer parseNotificationIconColor(String color) {
            int iconColor = 0;
            if (color != null) {
                try {
                    iconColor = Color.parseColor(color);
                } catch (IllegalArgumentException e) {
                    logger.error("Couldn't parse color from android options");
                }
            }
            return iconColor;
        }

        public Notification getNotification(String title, String text, String largeIcon, String smallIcon, String color) {
            Context appContext = mContext.getApplicationContext();

            // Build a Notification required for running service in foreground.
            NotificationCompat.Builder builder = new NotificationCompat.Builder(mContext);

            builder.setContentTitle(title);
            builder.setContentText(text);
            if (smallIcon != null && !smallIcon.isEmpty()) {
                builder.setSmallIcon(mResolver.getDrawable(smallIcon));
            } else {
                builder.setSmallIcon(android.R.drawable.ic_menu_mylocation);
            }
            if (largeIcon != null && !largeIcon.isEmpty()) {
                builder.setLargeIcon(BitmapFactory.decodeResource(appContext.getResources(), mResolver.getDrawable(largeIcon)));
            }
            if (color != null && !color.isEmpty()) {
                builder.setColor(this.parseNotificationIconColor(color));
            }

            // Add an onclick handler to the notification
            String packageName = appContext.getPackageName();
            Intent launchIntent = appContext.getPackageManager().getLaunchIntentForPackage(packageName);
            if (launchIntent != null) {
                // NOTICE: testing apps might not have registered launch intent
                launchIntent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                PendingIntent contentIntent = PendingIntent.getActivity(appContext, 0, launchIntent, PendingIntent.FLAG_CANCEL_CURRENT);
                builder.setContentIntent(contentIntent);
            }

            Notification notification = builder.build();
            notification.flags |= Notification.FLAG_ONGOING_EVENT | Notification.FLAG_FOREGROUND_SERVICE | Notification.FLAG_NO_CLEAR;

            return notification;
        }
    }

    public static void registerAllChannels(Context context) {
    }

    public static void registerServiceChannel(Context context) {
    }

    public static void registerSyncChannel(Context context ){
    }
}

