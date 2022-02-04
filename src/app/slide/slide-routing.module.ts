import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PrimeSlideComponent } from './prime-slide/prime-slide.component';
import { RegularSlideComponent } from './regular-slide/regular-slide.component';

const routes: Routes = [
  {
    path:'',
    component: HeaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlideRoutingModule { }
