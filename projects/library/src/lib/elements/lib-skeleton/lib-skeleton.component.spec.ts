import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSkeletonComponent } from './lib-skeleton.component';

describe('LibSkeletonComponent', () => {
  let component: LibSkeletonComponent;
  let fixture: ComponentFixture<LibSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
