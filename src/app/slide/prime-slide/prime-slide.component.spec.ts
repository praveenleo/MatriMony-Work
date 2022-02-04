import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeSlideComponent } from './prime-slide.component';

describe('PrimeSlideComponent', () => {
  let component: PrimeSlideComponent;
  let fixture: ComponentFixture<PrimeSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
