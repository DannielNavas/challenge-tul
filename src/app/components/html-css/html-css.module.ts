import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BemScssModule } from './bem-scss/bem-scss.module';
import { CssModule } from './css/css.module';
import { HtmlCssRoutingModule } from './html-css-routing.module';
import { HtmlCssComponent } from './html-css.component';

@NgModule({
  exports: [HtmlCssComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HtmlCssRoutingModule,
    CssModule,
    BemScssModule,
  ],
  declarations: [HtmlCssComponent],
})
export class HtmlCssModule {}
