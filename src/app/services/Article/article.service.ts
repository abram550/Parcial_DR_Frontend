import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleI } from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // URL base de la API
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/article`;  // Ruta para artículos

  constructor(
    private http: HttpClient
  ) { }

  // Obtener todos los artículos
  getAllArticles(): Observable<{ articles: ArticleI[] }> {
    return this.http
      .get<{ articles: ArticleI[] }>(this.base_path);  // Llama a la API para obtener los artículos
  }

  // Obtener un artículo por ID
  getOneArticle(id: number): Observable<{ article: ArticleI }> {
    return this.http
      .get<{ article: ArticleI }>(`${this.base_path}/${id}`);  // Llama a la API para obtener un artículo por su ID
  }

  // Crear un nuevo artículo
  createArticle(data: any): Observable<ArticleI> {
    return this.http.post<ArticleI>(this.base_path, data);  // Llama a la API para crear un artículo
  }

  // Actualizar un artículo existente
  updateArticle(id: number, data: any): Observable<ArticleI> {
    return this.http.put<ArticleI>(`${this.base_path}/${id}`, data);  // Llama a la API para actualizar el artículo
  }

  // Eliminar un artículo por ID
  deleteArticle(id: number): Observable<ArticleI> {
    return this.http.delete<ArticleI>(`${this.base_path}/${id}`);  // Llama a la API para eliminar un artículo
  }
}
