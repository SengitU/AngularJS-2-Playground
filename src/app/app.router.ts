import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplyBankComponent } from './bank/apply/form.component';

export const router: Routes = [
    { path: 'apply', component: ApplyBankComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
