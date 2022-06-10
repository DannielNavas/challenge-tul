import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes.component';

@NgModule({
  exports: [PipesComponent],
  imports: [CommonModule, FormsModule],
  declarations: [PipesComponent],
  //importar el pipe que esta en la carpeta de shared pipes
})
export class PipesModule {}
