import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeEditorModule } from '@ngstack/code-editor';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';

@NgModule({
  exports: [JavascriptComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    JavascriptRoutingModule,
    CodeEditorModule,
  ],
  declarations: [JavascriptComponent],
})
export class JavascriptModule {}
