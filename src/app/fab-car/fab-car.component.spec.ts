/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FabCarComponent } from './fab-car.component';

describe('FabCarComponent', () => {
  let component: FabCarComponent;
  let fixture: ComponentFixture<FabCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
