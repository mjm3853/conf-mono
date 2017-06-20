import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfCreateComponent } from './conf-create.component';

describe('ConfCreateComponent', () => {
  let component: ConfCreateComponent;
  let fixture: ComponentFixture<ConfCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
