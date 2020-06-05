import { Time } from '@angular/common';

// This interface define current time, current area and current location:{latitude,longitude}
export interface CurrentData {
  currentTime: string;
  current_area: string;
  curLocation: {};
}

// current location latitude and longitude
export interface CurrentLocation {
  latitude: number;
  longitude: number;
}

// current details of driver like current location, time, area
export interface DriverDetails {
  driver_id: string;
  currentDate: string;
  currentTime: string;
  curArea: string;
  location: {};
}
