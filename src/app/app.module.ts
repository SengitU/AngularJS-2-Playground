import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routes } from './app.router';
import { AppComponent }  from './app.component';
import { BankDetailComponent } from './bank/bank-detail.component';
import { ApplyBankComponent } from './bank/apply/form.component';
import { RouterModule }   from '@angular/router';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routes ],
  declarations: [ AppComponent, BankDetailComponent, ApplyBankComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
