const FCM = require('node-gcm');
const serverKey = 'AAAA1Ur1lfQ:APA91bGdQSEtmA2-DOT9ikr8xi8RHTb9NXAsxkxylx6saxPLSKMSQ5G5gQhLnzHMiUC_a3pkaYgL51zY63yIlbe-tdCFcXFGslwKVBhvuXqLXQNbHLzIWjfs_mECewh2EDcNl_kwUawf'; //put your server key here
const fcm = new FCM.Sender(serverKey);
const schema = require('./schemasModel');


class Notification {
  constructor() {

  }


  setUserToken(routeDetails) {
    schema.routes.findOne({
      "_id": routeDetails.route_id,
      "userToken": routeDetails.userToken
    }, function (error, data) {
      if (data) {
        console.log(data);
      } else {
        schema.routes.update({
          "_id": routeDetails.route_id
        }, {
          $push: {
            userToken: routeDetails.userToken
          }
        }).exec(data => {});
        /*  console.log(data);
         data.userToken.push(routeDetails.userToken);
         data.save(); */
      }
    });
  }

  sendNotification(currentArea, userToken) {
    const today = new Date();
    const currentTime = this.formateDateTime(today);
    console.log("user Token :" + userToken);
    var message = new FCM.Message({ //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      collapse_key: 'your_collapse_key',
      notification: {
        title: 'Title of your push notification',
        body: 'Bus is arrive at' + ' ' + currentArea
      },

      data: { //you can send only notification or only data(or include both)
        msgBody: 'Bus is arrive at' + ' ' + currentArea,
        currentTime: currentTime
      }
    });

    fcm.send(message, {
      registrationTokens: userToken
    }, function (err, response) {
      if (err) {
        console.log("Something has gone wrong!");
      } else {
        console.log("Successfully sent with response: ", response);
      }
    });
  }


  /**
   * This function give the current time in 12 hour formate
   * @function formateDateTime()
   * @param curTime
   */
  formateDateTime(curTime) {
    const time = new Date(curTime);
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const min = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + min + ' ' + ampm;
    return strTime;
  }
}
module.exports = Notification;