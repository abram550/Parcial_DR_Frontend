import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/Article/article.service';
import { ArticleI } from '../../../models/article';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-article',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-article.component.html',
  styleUrls: ['./actualizar-article.component.css']
})
export class ActualizarArticleComponent implements OnInit {
  public id: number = 0;
  public form!: FormGroup;

  articleService = inject(ArticleService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      stock_min: ['', [Validators.required]],
      stock_max: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.params['id'];
    this.getArticle(this.id);
  }

  getArticle(id: number) {
    this.articleService.getOneArticle(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data.article);
        },
        error: (err) => {
          console.error('Error fetching article:', err);
        }
      });
  }

  onSubmit(): void {
    const formValue: ArticleI = this.form.value;
    const id: number = this.form.value.id!;
    this.articleService.updateArticle(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('articles');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/articles');
  }

  get name() { return this.form.get('name'); }
  get quantity() { return this.form.get('quantity'); }
  get stock_min() { return this.form.get('stock_min'); }
  get stock_max() { return this.form.get('stock_max'); }
  get user_id() { return this.form.get('user_id'); }
}
