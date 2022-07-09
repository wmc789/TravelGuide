import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainComponent } from './spain.component';

describe('SpainComponent', () => {
  let component: SpainComponent;
  let fixture: ComponentFixture<SpainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
