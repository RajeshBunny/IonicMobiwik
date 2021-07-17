import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedeemMgmPointsPage } from './redeem-mgm-points.page';

describe('RedeemMgmPointsPage', () => {
  let component: RedeemMgmPointsPage;
  let fixture: ComponentFixture<RedeemMgmPointsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemMgmPointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemMgmPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
