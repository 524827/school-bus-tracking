import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * @description - This class provides functionality to check network connection is active or inactive of the device.
 * @class - NetworkService
 */
export class NetworkService {
  /**
   * @member {any} networkConnectSubscription -
   * @member {any} networkDisconnectSubscription -
   */
  private networkConnectSubscription: any;
  private networkDisconnectSubscription: any;

  /**
   * @description - This constructor creates the instance of Network.
   * @constructor
   * @param {Network} network - Instance of the Network.
   */
  constructor(private network: Network) {}

  /**
   * @description - this function checks whether the internet connection is connected.
   * @function - checkIsNetworkConnect
   * @returns - Observable<object>
   */
  checkIsNetworkConnect(): Observable<object> {
    // watch network for a connection
    return (this.networkConnectSubscription = this.network.onConnect());
  }

  /**
   * @description - this function unsubscribe the networkConnectSubscription.
   * @function - connectNetworkUnsubscribe
   * @returns - void
   */
  connectNetworkUnsubscribe(): void {
    // stop connect watch
    this.networkConnectSubscription.unsubscribe();
  }

  /**
   * @description - this function checks whether the internet connection is disconnected.
   * @function - checkIsNetworkDisconnect
   * @returns - Observable<object>
   */
  checkIsNetworkDisconnect(): Observable<object> {
    // watch network for a disconnection
    return (this.networkDisconnectSubscription = this.network.onDisconnect());
  }

  /**
   * @description - this function unsubscribe the networkDisconnectSubscription.
   * @function - disconnectNetworkUnsubscribe
   * @returns - void
   */
  disconnectNetworkUnsubscribe(): void {
    // stop disconnect watch
    this.networkDisconnectSubscription.unsubscribe();
  }
}
