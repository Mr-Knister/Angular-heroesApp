import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { CanMatchAuthGuard, canActivatedAuthGuard } from './auth/guards/auth.guard';
import { CanMatchPublicGuard, canActivatedPublicGuard } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [canActivatedPublicGuard],
    canMatch: [CanMatchPublicGuard]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate: [canActivatedAuthGuard],
    canMatch: [CanMatchAuthGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'heroes'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
