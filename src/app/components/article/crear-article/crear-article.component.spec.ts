import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArticleComponent } from './crear-article.component';

describe('CrearArticleComponent', () => {
  let component: CrearArticleComponent;
  let fixture: ComponentFixture<CrearArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
