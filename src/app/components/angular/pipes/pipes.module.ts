import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes.component';
import { StringPipe } from '../../../shared/pipes/string.pipe';
@NgModule({
  exports: [PipesComponent],
  imports: [CommonModule, FormsModule],
  declarations: [PipesComponent, StringPipe],
  //importar el pipe que esta en la carpeta de shared pipes
})
export class PipesModule {}
