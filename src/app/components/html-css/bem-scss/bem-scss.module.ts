import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BemScssComponent } from './bem-scss.component';

@NgModule({
  exports: [BemScssComponent],
  imports: [CommonModule, FormsModule],
  declarations: [BemScssComponent],
})
export class BemScssModule {}
