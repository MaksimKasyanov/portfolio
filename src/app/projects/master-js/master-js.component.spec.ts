import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterJSComponent } from './master-js.component';

describe('MasterJSComponent', () => {
  let component: MasterJSComponent;
  let fixture: ComponentFixture<MasterJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterJSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
