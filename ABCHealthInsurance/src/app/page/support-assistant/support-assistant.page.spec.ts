import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportAssistantPage } from './support-assistant.page';

describe('SupportAssistantPage', () => {
  let component: SupportAssistantPage;
  let fixture: ComponentFixture<SupportAssistantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportAssistantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
