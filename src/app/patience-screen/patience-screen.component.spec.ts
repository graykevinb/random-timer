import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienceScreenComponent } from './patience-screen.component';

describe('PatienceScreenComponent', () => {
  let component: PatienceScreenComponent;
  let fixture: ComponentFixture<PatienceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatienceScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatienceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
