import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
} from '@ionic-native/background-geolocation/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { DriverDetails, CurrentData } from '../model/curLocation';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})

export class DriverService {
  public data: DriverDetails;
  private response: CurrentData;
  private driverId: string;
  private vehicleStatus: string;
  currentArea;
  public curLocation: BehaviorSubject<object> = new BehaviorSubject(null);
  config: BackgroundGeolocationConfig = {
    desiredAccuracy: 10,
    stationaryRadius: 20,
    distanceFilter: 30,
    debug: true, //  enable this hear sounds for background-geolocation life-cycle.
    stopOnTerminate: false,
    interval: 5000,
  };
  constructor(
    private http: HttpClient,
    private backgroundGeolocation: BackgroundGeolocation,
    private nativeGeocoder: NativeGeocoder,
    private nativeStorage: NativeStorage,
    public toastController: ToastController
  ) {}
  /**
   * This function fetch driver details from database
   * @function getServerDriverDetails()
   * @param userName
   * @param userPassword
   */
  getServerDriverDetails(userName: string, userPassword: string) {
    return this.http.get(
      environment.driverUrl + '/show?driverUserName=' + userName + '&driverPassword=' + userPassword
    );
  }

  // fetch driver details base on driver _id
  getServerDriverDetailsById(driverId) {
    return this.http.get(environment.driverUrl + '/show?driverId=' + driverId);
  }

  /**
   * @description - This method send call to the server and update driver's data using drivers id.
   * @param {string} userData - Stores the data of the driver.
   * @returns - Returns the response of the server.
   */
  updateServerDriverAllDetails(userData: object) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(`${environment.driverUrl}/updateAllDetails`, userData, {
      headers: headers,
    });
  }

  updateServerDriverDetailsById(userData: object) {
    return this.http.get(environment.driverUrl);
  }

  getServerDriverDetailsByEmail(driverEmail: string) {
    return this.http.get(environment.driverUrl + '/show?driverEmail=' + driverEmail);
  }

  // Enable driver location
  enableLocation(driverId: string) {
    this.driverId = driverId;
    this.backgroundGeolocation.configure(this.config);
    this.backgroundGeolocation.start();
  }

  // Disable driver location
  disableLocation() {
    this.backgroundGeolocation.stop();
  }
  /**
   * Get current location of driver
   * @function getCurrentLocation()
   */
  getCurrentLocation() {
    this.backgroundGeolocation.getCurrentLocation().then(async location => {
      const date = new Date(location.time);
      const fullDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      const time = await this.formateDateTime(location.time);
      const latLong = { latitude: location.latitude, longitude: location.longitude };
      this.nativeGeocoder
        .reverseGeocode(location.latitude, location.longitude)
        .then((result: NativeGeocoderResult[]) => {
          this.presentToast(result[0].thoroughfare);
          this.nativeStorage.setItem('currentArea', result[0].thoroughfare);
          const data: DriverDetails = {
            driver_id: this.driverId,
            currentDate: fullDate,
            currentTime: time,
            curArea: result[0].thoroughfare,
            location: latLong,
          };
          if (this.currentArea !== result[0].thoroughfare && result[0].thoroughfare !== '') {
            this.setCurrentLocation(data);
          }
        })
        .catch((error: any) => console.log(error));
    });
  }
  /**
   * This function store current location of driver in database
   * @function setCurrentLocation()
   * @param data
   */
  setCurrentLocation(data: DriverDetails) {
    console.log('Data : ', data);
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    this.http
      .post(environment.driverUrl + '/logDetails', data, { headers: headers })
      .subscribe(res => {
        this.response = res['data'];
        this.currentArea = this.response.current_area;
        this.curLocation.next(this.response);
      });
  }

  setVehicleStatus(driverId: string, vehicleStatus: string) {
    const data = {
      vehicleStatus: vehicleStatus,
      driverId: driverId,
    };
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(environment.vehicleUrl + '/vehicleStatus', data, { headers: headers });
  }

  /**
   * This function give the current time in 12 hour formate
   * @function formateDateTime()
   * @param curTime
   */
  formateDateTime(curTime: any) {
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

  // sapmple toast

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
    });
    toast.present();
  }
}
