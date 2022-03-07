import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingContentComponent } from './clothing-content.component';

describe('ClothingContentComponent', () => {
  let component: ClothingContentComponent;
  let fixture: ComponentFixture<ClothingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
