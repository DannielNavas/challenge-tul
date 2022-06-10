import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [NgrxComponent],
  imports: [CommonModule, FormsModule],
  declarations: [NgrxComponent],
})
export class NgrxModule {}
