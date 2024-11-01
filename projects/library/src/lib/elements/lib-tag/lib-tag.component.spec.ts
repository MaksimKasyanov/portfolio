import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTagComponent } from './lib-tag.component';

describe('LibTagComponent', () => {
  let component: LibTagComponent;
  let fixture: ComponentFixture<LibTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
