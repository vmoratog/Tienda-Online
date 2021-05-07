import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayuotComponent } from './layout/layuot.component';
import { AdminGuard } from './admin.guard'

const routes: Routes = [
  {
    path: '',
    component: LayuotComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModeule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(p => p.ProductsModeule)
      },
      {
        path: 'catalog-products',
        loadChildren: () => import('./catalog-product/product.module').then(p => p.CatalogProductsModeule)
      },
      {
        path: 'contact',
        /*canActivate: [AdminGuard],*/
        loadChildren: () => import('./contact/contact.module').then(p => p.ContactModeule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(p => p.AboutUsModule)
      },
      {
        path: 'stores',
        loadChildren: () => import('./stores/stores.module').then(p => p.StoresModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(p => p.DemoModeule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(p => p.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(p => p.PageNotFoundModeule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
