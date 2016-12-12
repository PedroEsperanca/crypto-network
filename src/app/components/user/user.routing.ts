import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { PassportComponent } from './passport/passport.component';

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
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'verify-email/:token',
        component: VerifyEmailComponent
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent
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
        path: 'passport/:id/:userId/:ttl/:issuedAt',
        component: PassportComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
