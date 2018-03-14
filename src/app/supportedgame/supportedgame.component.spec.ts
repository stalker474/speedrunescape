import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedgameComponent } from './supportedgame.component';

describe('SupportedgameComponent', () => {
  let component: SupportedgameComponent;
  let fixture: ComponentFixture<SupportedgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportedgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
