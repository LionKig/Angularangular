import { Component } from '@angular/core';
import { ICountry } from './ICountry';
import { CountryDetailsComponent } from './country-details.component';
import { CountryService } from './country.service';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  public _countries: ICountry[] | undefined;
  public _currentCountry!: ICountry;

  constructor(private _countryService: CountryService) {
    this._countryService
      .getCountries()
      .subscribe((countries: ICountry[]) => (this._countries = countries));
  }
}
