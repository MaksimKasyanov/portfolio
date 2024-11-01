import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAsideComponent } from './structure-aside.component';

describe('StructureAsideComponent', () => {
  let component: StructureAsideComponent;
  let fixture: ComponentFixture<StructureAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureAsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
