import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private storageService: StorageService) {}

  /**
   * This function return the status of user in boolean
   * If status is false then user will not navigate to next page
   * If status is true then user will navigate to the next page
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.storageService.isAuthenticated()) {
      console.log('true in authservice');
      return true;
    }
  }
}
