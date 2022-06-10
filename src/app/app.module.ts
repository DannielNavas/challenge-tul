import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CodeEditorModule } from '@ngstack/code-editor';
import { AppRestricted } from './shared/directives/hostlisteners.directive';
import { StoreModule } from '@ngrx/store';
import * as fromReduce from './shared/ngrx/reducers/clients';

import { StringPipe } from './shared/pipes/string.pipe';

@NgModule({
  declarations: [AppComponent, AppRestricted],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CodeEditorModule.forRoot(),
    StoreModule.forRoot({
      clientReduce: fromReduce.ClientReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
