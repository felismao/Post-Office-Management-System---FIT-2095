import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelComponent } from './list-parcel.component';

describe('ListParcelComponent', () => {
  let component: ListParcelComponent;
  let fixture: ComponentFixture<ListParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
