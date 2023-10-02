import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSenderComponent } from './list-sender.component';

describe('ListSenderComponent', () => {
  let component: ListSenderComponent;
  let fixture: ComponentFixture<ListSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
