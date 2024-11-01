import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAsideButtonComponent } from './structure-aside-button.component';

describe('StructureAsideButtonComponent', () => {
  let component: StructureAsideButtonComponent;
  let fixture: ComponentFixture<StructureAsideButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureAsideButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureAsideButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
