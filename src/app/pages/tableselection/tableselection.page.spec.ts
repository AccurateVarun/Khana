import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableselectionPage } from './tableselection.page';

describe('TableselectionPage', () => {
  let component: TableselectionPage;
  let fixture: ComponentFixture<TableselectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableselectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
