// angular
import { Routes } from '@angular/router';

import { UserLoggedGuard, ProfileExistsGuard } from 'shared/app/guards';
import { ProfileResolver } from 'shared/app/resolvers';

import { NotFoundComponent } from './components/not-found/not-found.component';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './components/index/index.module#IndexModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule'
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
    path: 'organizations',
    loadChildren: './components/organizations/organizations.module#OrganizationsModule',
    canActivate: [ UserLoggedGuard ]
  },
  {
    path: 'settings',
    loadChildren: './components/settings/settings.module#SettingsModule',
    canActivate: [ UserLoggedGuard ]
  },

  // Public
  {
    path: ':id',
    loadChildren: './components/profile/profile.module#ProfileModule',
    canActivate: [ ProfileExistsGuard ],
    resolve: {
      profile: ProfileResolver
    }
  }
];
