import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { LoadingModule } from '../../components/loading/loading.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DebounceModule } from '../../directives/debounce/debounce.module';
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    LoadingModule,
    CommonModule,
    RegisterRoutingModule,
    MatFormFieldModule,
    //material ui

    LoadingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    //debounce module
    DebounceModule,
  ],
})
export class RegisterModule {}
