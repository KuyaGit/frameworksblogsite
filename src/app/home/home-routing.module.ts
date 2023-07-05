import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'vue',
    loadChildren: () => import('./vue/vue.module').then( m => m.VuePageModule)
  },
  {
    path: 'react',
    loadChildren: () => import('./react/react.module').then( m => m.ReactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
