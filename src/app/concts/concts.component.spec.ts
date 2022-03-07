import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctsComponent } from './concts.component';

describe('ConctsComponent', () => {
  let component: ConctsComponent;
  let fixture: ComponentFixture<ConctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConctsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
