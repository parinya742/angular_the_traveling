import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEuropeComponent } from './travel-europe.component';

describe('TravelEuropeComponent', () => {
  let component: TravelEuropeComponent;
  let fixture: ComponentFixture<TravelEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelEuropeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
