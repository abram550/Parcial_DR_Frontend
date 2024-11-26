import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarArticleComponent } from './actualizar-article.component';

describe('ActualizarArticleComponent', () => {
  let component: ActualizarArticleComponent;
  let fixture: ComponentFixture<ActualizarArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
