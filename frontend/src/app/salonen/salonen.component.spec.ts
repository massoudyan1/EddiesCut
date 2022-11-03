import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonenComponent } from './salonen.component';

describe('SalonenComponent', () => {
  let component: SalonenComponent;
  let fixture: ComponentFixture<SalonenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
