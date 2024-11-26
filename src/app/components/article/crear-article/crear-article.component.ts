import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../services/Article/article.service';
import { ArticleI } from '../../../models/article';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-article',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-article.component.html',
  styleUrls: ['./crear-article.component.css']
})
export class CrearArticleComponent implements OnInit {

  public form: FormGroup;
  articleService = inject(ArticleService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // Define el formulario reactivo para crear un artículo
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],          // Nombre del artículo
      quantity: ['', [Validators.required]],      // Cantidad
      stock_min: ['', [Validators.required]],     // Stock mínimo
      stock_max: ['', [Validators.required]],     // Stock máximo
      user_id: ['', [Validators.required]],       // ID del usuario relacionado
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: ArticleI = this.form.value; // Obtiene el valor del formulario
    console.log(formValue);
    this.articleService.createArticle(formValue).subscribe(
      () => {
        console.log('Artículo creado exitosamente');
        this.router.navigateByUrl('articles');  // Redirige a la página de artículos
      },
      err => {
        console.log(err);
        console.log('Error al crear el artículo');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/articles'); // Redirige a la página de artículos
  }

  // Getters para facilitar el acceso a los controles del formulario
  get name() { return this.form.get('name'); }
  get quantity() { return this.form.get('quantity'); }
  get stock_min() { return this.form.get('stock_min'); }
  get stock_max() { return this.form.get('stock_max'); }
  get user_id() { return this.form.get('user_id'); }
}
