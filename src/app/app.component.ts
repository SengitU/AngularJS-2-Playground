import { Component, OnInit } from '@angular/core';

import { BankService } from './bank/bank.service';
import { Bank } from './bank/bank';

@Component({
  selector: 'my-app',
  providers: [ BankService ],
  template: `
  <div>
    <h1>{{title}}</h1>
    <table>
      <thead></thead>
      <tbody>
        <tr *ngFor="let bank of banks">
          <bank-detail [bank]="bank"></bank-detail>
        </tr>
      </tbody>
    </table>
  </div>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  title = 'List of Banks';
  banks: Bank[];

  constructor(private bankService: BankService) { }

  getBanks(): void {
    this.bankService.getBanks().then(banks => this.banks = banks);
  }

  ngOnInit(): void {
    this.getBanks();
  }
}
