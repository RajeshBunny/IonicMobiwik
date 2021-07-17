import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Recharge & Bill Pay', url: '/rechargebills', icon: 'battery-charging-sharp' },
    { title: 'Transfer to Bank', url: '/banktransfer', icon: 'dth' },
    { title: 'Offers & Deals', url: '/offers', icon: 'dth' },
    { title: 'Boost-Loans', url: '/boostloan', icon: 'dth' },
    { title: 'Local-Stores', url: '/localstores', icon: 'dth' },
    { title: 'Redeem-Pay back points', url: '/redeem', icon: 'dth' },
    { title: 'Reedem-MGM Points', url: '/redeemmgmpoints', icon: 'dth' },
    { title: 'Wallet-Transfer', url: '/wallet', icon: 'dth' },

  ];
  public labels = ['Mutual Funds', 'Insurance', 'E-Gold', 'Express Fixed Deposit', 'Axis Plus Credit Card', 'Accepet Payments'];
  constructor() {}
}
