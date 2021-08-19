import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './countries/country-list.component';
import { CountryDetailsComponent } from './countries/country-details.component';
import { CountryService } from './countries/country.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CountryListComponent, CountryDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'countries', pathMatch: 'full' },
      { path: 'countries', component: CountryListComponent },
      { path: 'countries/:code', component: CountryDetailsComponent },
      { path: '**', redirectTo: 'countries', pathMatch: 'full' },
    ]),
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
