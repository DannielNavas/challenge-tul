import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

@NgModule({
  exports: [InputComponent],
  imports: [CommonModule, FormsModule],
  declarations: [InputComponent],
})
export class InputModule {}
