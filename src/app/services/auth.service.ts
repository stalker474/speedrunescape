import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'hw_gUiYFObQnT17Tuep7XT1hyNkOGCK2',
    domain: 'speedrunescape.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://speedrunescape.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log("PLOP");
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
      this.router.navigate(['/login']);
        console.log(err);
      }
    });
    this.router.navigate(['/login']);
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}