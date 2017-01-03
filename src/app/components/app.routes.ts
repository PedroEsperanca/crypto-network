// angular
import { Routes } from '@angular/router';

import { UserLoggedGuard } from 'frameworks/app/guards';
import { ProfileResolver } from 'frameworks/app/resolvers';

import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => System.import('./index/index.module')
      .then((comp: any) => comp.default)
  },
  {
    path: 'user',
    loadChildren: () => System.import('./user/user.module')
      .then((comp: any) => comp.default)
  },
  { path: 'login', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'signin', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'signup', redirectTo: 'user/signup', pathMatch: 'full' },
  {
    path: 'verify/:token/:userId',
    redirectTo: 'user/verify/:token/:userId',
    pathMatch: 'full'
  },
  { path: 'verify', redirectTo: 'user/verify', pathMatch: 'full' },
  {
    path: 'reset-password/:token/:userId',
    redirectTo: 'user/reset-password/:token/:userId',
    pathMatch: 'full'
  },
  { path: 'recover-account', redirectTo: 'user/recover-account', pathMatch: 'full' },

  // Private
  {
    path: 'apps',
    loadChildren: () => System.import('./apps/apps.module')
      .then((comp: any) => comp.default),
    canActivate: [ UserLoggedGuard ]
  },
  {
    path: 'settings',
    loadChildren: () => System.import('./settings/settings.module')
      .then((comp: any) => comp.default),
    canActivate: [ UserLoggedGuard ]
  },

  // Public
  {
    path: ':id',
    loadChildren: () => System.import('./profile/profile.module')
      .then((comp: any) => comp.default),
    resolve: {
      profile: ProfileResolver
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
