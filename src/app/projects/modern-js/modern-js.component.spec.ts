import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernJSComponent } from './modern-js.component';

describe('ModernJSComponent', () => {
  let component: ModernJSComponent;
  let fixture: ComponentFixture<ModernJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernJSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
