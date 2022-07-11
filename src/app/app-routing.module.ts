import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Categoria/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
 
  {
    path: 'Home',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Sub-categorias/:id',
    loadChildren: () => import('./subcategorias/subcategorias.module').then( m => m.SubcategoriasPageModule)
  },
  {
    path: 'Search/:q',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  
  {
    path: 'viewproduct/:p',
    loadChildren: () => import('./viewproduct/viewproduct.module').then( m => m.ViewproductPageModule)
  },
 
  {
    path: 'viewcart',
    loadChildren: () => import('./viewcart/viewcart.module').then( m => m.ViewcartPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
