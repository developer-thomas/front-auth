import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './pages/sign/sign.component';
import { LoginIconComponent } from 'src/app/icons/login/login.component';
import { PasswordIconComponent } from 'src/app/icons/password-icon/password-icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignComponent, LoginIconComponent, PasswordIconComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AuthModule {}
