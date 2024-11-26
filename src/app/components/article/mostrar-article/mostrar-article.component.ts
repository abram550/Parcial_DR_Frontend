import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/Article/article.service';
import { ArticleI } from '../../../models/article';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mostrar-article',
  standalone: true,
  imports: [CardModule, TableModule,RouterModule], // Asegúrate de que hayas importado los módulos necesarios en el archivo de este componente
  templateUrl: './mostrar-article.component.html',
  styleUrls: ['./mostrar-article.component.css']
})
export class MostrarArticleComponent implements OnInit {

  public articles: ArticleI[] = []; // Variable para almacenar los artículos

  constructor(
    private articleService: ArticleService, // Servicio de artículos
    private router: Router // Router para la navegación
  ) { }

  ngOnInit(): void {
    this.mostrarArticles(); // Llamada para obtener los artículos al cargar el componente
  }

  mostrarArticles() {
    this.articleService.getAllArticles().subscribe({
      next: (data) => {
        this.articles = data.articles; // Asigna los artículos obtenidos del servicio
      },
      error: (err) => {
        console.error('Error al obtener los artículos:', err); // Manejo de errores
      }
    });
  }

  eliminar(id: number): void {
    this.articleService.deleteArticle(id).subscribe(
      () => {
        this.mostrarArticles(); // Vuelve a cargar la lista de artículos después de eliminar uno
      },
      err => {
        console.error('Error al eliminar el artículo', err);
      }
    );
  }
}
