import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormComponent } from './ajouter-form.component';

describe('AjouterFormComponent', () => {
  let component: AjouterFormComponent;
  let fixture: ComponentFixture<AjouterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
