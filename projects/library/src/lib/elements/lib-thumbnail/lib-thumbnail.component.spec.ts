import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibThumbnailComponent } from './lib-thumbnail.component';

describe('LibThumbnailComponent', () => {
  let component: LibThumbnailComponent;
  let fixture: ComponentFixture<LibThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
