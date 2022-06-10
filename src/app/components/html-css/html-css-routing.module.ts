import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlCssComponent } from './html-css.component';

const routes: Routes = [
  {
    path: '',
    component: HtmlCssComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlCssRoutingModule {}
