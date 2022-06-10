import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [OutputComponent],
  imports: [CommonModule, FormsModule],
  declarations: [OutputComponent],
})
export class OutputModule {}
