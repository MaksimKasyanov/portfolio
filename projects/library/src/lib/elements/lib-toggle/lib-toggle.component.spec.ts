import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibToggleComponent } from './lib-toggle.component';

describe('LibToggleComponent', () => {
  let component: LibToggleComponent;
  let fixture: ComponentFixture<LibToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
