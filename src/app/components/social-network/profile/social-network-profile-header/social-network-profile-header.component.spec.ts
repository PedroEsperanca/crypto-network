import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkProfileHeaderComponent } from './social-network-profile-header.component';

describe('SocialNetworkProfileHeaderComponent', () => {
  let component: SocialNetworkProfileHeaderComponent;
  let fixture: ComponentFixture<SocialNetworkProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
