import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ICountry } from './ICountry';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CountryService {
  constructor(private _http: HttpClient) {}

  getCountries(): Observable<ICountry[]> {
    return this._http.get<ICountry[]>(
      'http://localhost/angular/php-server/services/getCountries.php'
    );
  }

  getCountry(code: string): Observable<ICountry> {
    return this._http.get<ICountry>(
      'http://localhost/angular/php-server/services/getCountry.php?code=' +
        encodeURIComponent(code)
    );
  }

  addState(name: string, code: string): Observable<boolean> {
    return this._http.post<boolean>(
      'http://localhost/angular/php-server/services/addState.php',
      new HttpParams().set('name', name).set('code', code).toString(),
      {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      }
    );
  }
}
