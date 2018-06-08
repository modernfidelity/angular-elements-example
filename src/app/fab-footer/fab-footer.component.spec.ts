import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabFooterComponent } from './fab-footer.component';

describe('FabFooterComponent', () => {
  let component: FabFooterComponent;
  let fixture: ComponentFixture<FabFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
