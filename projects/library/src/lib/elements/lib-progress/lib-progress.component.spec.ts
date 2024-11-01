import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibProgressComponent } from './lib-progress.component';

describe('LibProgressComponent', () => {
  let component: LibProgressComponent;
  let fixture: ComponentFixture<LibProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
