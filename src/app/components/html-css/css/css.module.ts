import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CssComponent } from './css.component';

@NgModule({
  exports: [CssComponent],
  imports: [CommonModule, FormsModule],
  declarations: [CssComponent],
})
export class CssModule {}
