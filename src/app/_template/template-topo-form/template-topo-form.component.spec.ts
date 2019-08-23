import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTopoFormComponent } from './template-topo-form.component';

describe('TemplateTopoFormComponent', () => {
  let component: TemplateTopoFormComponent;
  let fixture: ComponentFixture<TemplateTopoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTopoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTopoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
