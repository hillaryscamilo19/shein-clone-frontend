import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartImgComponent } from './cart-img.component';

describe('CartImgComponent', () => {
  let component: CartImgComponent;
  let fixture: ComponentFixture<CartImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
