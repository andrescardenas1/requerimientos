import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiroPage } from './giro.page';

describe('GiroPage', () => {
  let component: GiroPage;
  let fixture: ComponentFixture<GiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
