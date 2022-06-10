import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  exports: [HomeComponent],
  imports: [FormsModule, CommonModule, RouterModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
