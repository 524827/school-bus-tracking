import { Injectable } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CurrentLocation } from '../model/curLocation';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivemapService {
  public curLocation: BehaviorSubject<object> = new BehaviorSubject(null);
  private response = {};

  constructor(private nativeGeocoder: NativeGeocoder, private http: HttpClient) { }

  public coordinates: CurrentLocation;
  getCurrentLatLong(address: string) {
    this.nativeGeocoder
      .forwardGeocode(address)
      .then((coordinates: NativeGeocoderResult[]) => {
        this.coordinates = {
          latitude: parseFloat(coordinates[0].latitude),
          longitude: parseFloat(coordinates[0].longitude),
        };
      })
      .catch((error: any) => console.log(error));
    return this.coordinates;
  }

  async getCurrentLocation() {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    this.http.get(environment.busCoordinatorUrl + '/currentLocation').subscribe(async res => {
      console.log(' : ', res);
      this.response = res['data'];
      console.log(this.response);
      await this.curLocation.next(this.response);
    });
  }
}
