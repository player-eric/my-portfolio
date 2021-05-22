import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailStartComponent } from './project-detail-start.component';

describe('ProjectDetailStartComponent', () => {
  let component: ProjectDetailStartComponent;
  let fixture: ComponentFixture<ProjectDetailStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
