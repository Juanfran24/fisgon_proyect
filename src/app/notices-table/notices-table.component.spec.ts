import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesTableComponent } from './notices-table.component';

describe('NoticesTableComponent', () => {
  let component: NoticesTableComponent;
  let fixture: ComponentFixture<NoticesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
