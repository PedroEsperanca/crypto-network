import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkProfileSideComponent } from './social-network-profile-side.component';

describe('SocialNetworkProfileSideComponent', () => {
  let component: SocialNetworkProfileSideComponent;
  let fixture: ComponentFixture<SocialNetworkProfileSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkProfileSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkProfileSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
