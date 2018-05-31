import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyIntroComponent } from './copy-intro.component';

describe('CopyIntroComponent', () => {
  let component: CopyIntroComponent;
  let fixture: ComponentFixture<CopyIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
