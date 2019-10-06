import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalTrendsComponent } from './cultural-trends.component';

describe('CulturalTrendsComponent', () => {
  let component: CulturalTrendsComponent;
  let fixture: ComponentFixture<CulturalTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
