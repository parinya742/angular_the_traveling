import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSouthAmericaComponent } from './travel-south-america.component';

describe('TravelSouthAmericaComponent', () => {
  let component: TravelSouthAmericaComponent;
  let fixture: ComponentFixture<TravelSouthAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelSouthAmericaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelSouthAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
