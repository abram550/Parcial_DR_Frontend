import { Routes } from '@angular/router';

// Artículos
import { MostrarArticleComponent } from './components/article/mostrar-article/mostrar-article.component';
import { CrearArticleComponent } from './components/article/crear-article/crear-article.component';
import { ActualizarArticleComponent } from './components/article/actualizar-article/actualizar-article.component';

export const routes: Routes = [
    { 
        path: '', 
        component: MostrarArticleComponent,  // O cualquier otro componente que desees mostrar por defecto
    },
    // Rutas de Artículos
    {
        path: "articles",
        component: MostrarArticleComponent
    },
    {
        path: "articles/nuevo",
        component: CrearArticleComponent
    },
    {
        path: "articles/edit/:id",
        component: ActualizarArticleComponent
    },
];
