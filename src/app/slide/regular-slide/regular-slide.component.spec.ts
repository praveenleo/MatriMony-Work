import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularSlideComponent } from './regular-slide.component';

describe('RegularSlideComponent', () => {
  let component: RegularSlideComponent;
  let fixture: ComponentFixture<RegularSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
