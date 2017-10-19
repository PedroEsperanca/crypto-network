import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { PassportComponent } from './passport/passport.component';
import { InvitedComponent } from './invited/invited.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          meta: {
            title: 'Login'
          }
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          meta: {
            title: 'Signup'
          }
        }
      },
      {
        path: 'verify/:token',
        component: VerifyComponent
      },
      {
        path: 'verify',
        component: VerifyComponent
      },
      {
        path: 'reset-password/:token/:userId',
        component: ResetPasswordComponent
      },
      {
        path: 'recover-account',
        component: RecoverAccountComponent
      },
      {
        path: 'passport/error/:error',
        component: PassportComponent
      },
      {
        path: 'passport/:id/:userId/:ttl/:created',
        component: PassportComponent
      },
      {
        path: 'invited/:token',
        component: InvitedComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
