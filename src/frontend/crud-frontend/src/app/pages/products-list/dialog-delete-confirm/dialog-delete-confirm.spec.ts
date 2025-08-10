import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteConfirm } from './dialog-delete-confirm';

describe('DialogDeleteConfirm', () => {
  let component: DialogDeleteConfirm;
  let fixture: ComponentFixture<DialogDeleteConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteConfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
