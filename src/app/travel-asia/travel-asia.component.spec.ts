import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAsiaComponent } from './travel-asia.component';

describe('TravelAsiaComponent', () => {
  let component: TravelAsiaComponent;
  let fixture: ComponentFixture<TravelAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelAsiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
