import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSpinnerComponent } from './lib-spinner.component';

describe('LibSpinnerComponent', () => {
  let component: LibSpinnerComponent;
  let fixture: ComponentFixture<LibSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
