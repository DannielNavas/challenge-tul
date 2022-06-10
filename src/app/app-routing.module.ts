import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'css',
    loadChildren: () =>
      import('./components/html-css/html-css.module').then(
        (m) => m.HtmlCssModule
      ),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('./components/javascript/javascript.module').then(
        (m) => m.JavascriptModule
      ),
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./components/angular/angular.module').then(
        (m) => m.AngularModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
