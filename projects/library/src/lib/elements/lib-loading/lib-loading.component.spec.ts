import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibLoadingComponent } from './lib-loading.component';

describe('LibLoadingComponent', () => {
  let component: LibLoadingComponent;
  let fixture: ComponentFixture<LibLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
