import { Component, Input } from '@angular/core';
import { Bank } from './bank';

@Component({
  selector: 'bank-detail',
  template: `
    <td>{{bank.bank}}</td>
    <td>{{bank.interesMin}}</td>
    <td>{{bank.interesMax}}</td>
    <td>{{bank.monthlyRate}}</td>
    <td>{{bank.totalLoanAmount}}</td>
    <td><a href="/apply">Apply</a></td>
  `
})
export class BankDetailComponent {
  @Input() bank: Bank;
}

/*<tr *ngFor="let bank of banks">*/
