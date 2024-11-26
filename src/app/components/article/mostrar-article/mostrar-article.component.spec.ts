import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarArticleComponent } from './mostrar-article.component';

describe('MostrarArticleComponent', () => {
  let component: MostrarArticleComponent;
  let fixture: ComponentFixture<MostrarArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
