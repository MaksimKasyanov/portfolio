import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTextareaComponent } from './lib-textarea.component';

describe('LibTextareaComponent', () => {
  let component: LibTextareaComponent;
  let fixture: ComponentFixture<LibTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
