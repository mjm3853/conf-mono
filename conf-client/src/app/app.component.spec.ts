import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConfListComponent } from './content/conf-list/conf-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ConfListComponent
      ],
      imports: [
        MaterialModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have correct title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('conf.io');
  }));
});
