import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { DirectivesModule } from './directives/directives.module';
import { InputModule } from './input/input.module';
import { OutputModule } from './output/output.module';
import { PipesModule } from './pipes/pipes.module';
import { NgrxModule } from './ngrx/ngrx.module';

import{StringPipe} from '../../shared/pipes/string.pipe'

@NgModule({
  exports: [AngularComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AngularRoutingModule,
    OutputModule,
    InputModule,
    DirectivesModule,
    PipesModule,
    NgrxModule,
    
  ],
  declarations: [AngularComponent],
})
export class AngularModule {}
