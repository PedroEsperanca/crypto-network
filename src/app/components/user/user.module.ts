import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';

import { SDKStorage } from 'frameworks/api/storage/storage.swaps';
import { CookieBrowser } from 'frameworks/api/storage/cookie.browser';

import { TooltipModule } from 'ng2-bootstrap/components/tooltip';

import { routing } from './user.routing';
import { UserComponent } from './user.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { PassportComponent } from './passport/passport.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultilingualModule,
    routing,
    TooltipModule
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
    VerifyComponent,
    ResetPasswordComponent,
    RecoverAccountComponent,
    PassportComponent
  ],
  providers: [
    { provide: SDKStorage, useClass: CookieBrowser },
  ]
})
export default class UserModule { }
