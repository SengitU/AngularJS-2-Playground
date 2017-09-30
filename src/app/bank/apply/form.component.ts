import { Component } from '@angular/core';

import { ApplicationService } from './application.service';
import { Application } from './application';

@Component({
  selector: 'bank-application-form',
  templateUrl: './form.component.html',
  providers: [ ApplicationService ]
})
export class ApplyBankComponent {
  titles = [ 'Mr', 'Mrs'];

  constructor(private applicationService: ApplicationService) { }

  application = new Application('', '', '', '');

  onSubmit() {
    this.applicationService.apply(this.application);
  };
}
