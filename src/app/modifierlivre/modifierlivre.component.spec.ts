import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierlivreComponent } from './modifierlivre.component';

describe('ModifierlivreComponent', () => {
  let component: ModifierlivreComponent;
  let fixture: ComponentFixture<ModifierlivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierlivreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
