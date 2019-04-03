import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RentFeatureShellModule } from '@gdanx/rent/feature-shell';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, RentFeatureShellModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
