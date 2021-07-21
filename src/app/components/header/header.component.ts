import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild(AppComponent) sideMenu: any;
  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {}

  toggleSidenav(){
    this.menuCtrl.toggle();
  }
}
