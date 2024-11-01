import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibRadioComponent } from './lib-radio.component';

describe('LibRadioComponent', () => {
  let component: LibRadioComponent;
  let fixture: ComponentFixture<LibRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
