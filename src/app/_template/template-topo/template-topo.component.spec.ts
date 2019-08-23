import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTopoComponent } from './template-topo.component';

describe('TemplateTopoComponent', () => {
  let component: TemplateTopoComponent;
  let fixture: ComponentFixture<TemplateTopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
