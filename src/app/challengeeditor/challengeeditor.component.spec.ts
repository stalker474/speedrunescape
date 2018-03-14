import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeeditorComponent } from './challengeeditor.component';

describe('ChallengeeditorComponent', () => {
  let component: ChallengeeditorComponent;
  let fixture: ComponentFixture<ChallengeeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
