import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibButtonComponent } from './lib-button.component';

describe('LibButtonComponent', () => {
  let component: LibButtonComponent;
  let fixture: ComponentFixture<LibButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
