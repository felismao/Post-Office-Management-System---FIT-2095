import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSenderComponent } from './delete-sender.component';

describe('DeleteSenderComponent', () => {
  let component: DeleteSenderComponent;
  let fixture: ComponentFixture<DeleteSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
