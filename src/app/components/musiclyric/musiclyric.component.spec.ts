import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiclyricComponent } from './musiclyric.component';

describe('MusiclyricComponent', () => {
  let component: MusiclyricComponent;
  let fixture: ComponentFixture<MusiclyricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiclyricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiclyricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
