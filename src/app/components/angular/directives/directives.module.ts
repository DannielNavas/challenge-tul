import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives.component';

@NgModule({
  exports: [DirectivesComponent],
  imports: [CommonModule, FormsModule],
  declarations: [DirectivesComponent],
})
export class DirectivesModule {}
