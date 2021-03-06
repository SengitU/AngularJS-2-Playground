"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var bank_1 = require("./bank");
var BankDetailComponent = (function () {
    function BankDetailComponent() {
    }
    return BankDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", bank_1.Bank)
], BankDetailComponent.prototype, "bank", void 0);
BankDetailComponent = __decorate([
    core_1.Component({
        selector: 'bank-detail',
        template: "\n    <td>{{bank.bank}}</td>\n    <td>{{bank.interesMin}}</td>\n    <td>{{bank.interesMax}}</td>\n    <td>{{bank.monthlyRate}}</td>\n    <td>{{bank.totalLoanAmount}}</td>\n    <td><a href=\"/apply\">Apply</a></td>\n  "
    })
], BankDetailComponent);
exports.BankDetailComponent = BankDetailComponent;
/*<tr *ngFor="let bank of banks">*/
//# sourceMappingURL=bank-detail.component.js.map