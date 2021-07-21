import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Recharge & Bill Pay', url: '/rechargebills', image: '../assets/icon/recharge.png'},
    { title: 'Transfer to Bank', url: '/banktransfer', image:'../assets/icon/bank.png' },
    { title: 'Offers & Deals', url: '/offers', image:'../assets/icon/offers.png' },
    { title: 'Boost-Loans', url: '/boostloan', image:'../assets/icon/loan.png' },
    { title: 'Local-Stores', url: '/localstores', image:'../assets/icon/local store.png' },
    { title: 'Redeem-Pay back points', url: '/redeem', image:'../assets/icon/redeem.png' },
    { title: 'Reedem-MGM Points', url: '/redeemmgmpoints', image:'../assets/icon/mobiwik.png' },
    { title: 'Wallet-Transfer', url: '/wallet', image:'../assets/icon/wallet.png' },

  ];
  public labels = ['Mutual Funds', 'Insurance', 'E-Gold', 'Express Fixed Deposit', 'Axis Plus Credit Card', 'Accepet Payments'];
  constructor(public menuCtrl: MenuController) {
    //this.initializeApp();
  }

  enableAuthenticatedMenu() {
    this.menuCtrl.enable(true, 'authenticated');
    this.menuCtrl.enable(false, 'unauthenticated');
  } 
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
}
