import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { LoadingModule } from '../../components/loading/loading.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DebounceModule } from '../../directives/debounce/debounce.module';
import { FormFieldModule } from '../../components/form-field/form-field.module';
import { MyInputDirective } from '../../directives/input/input.directive';

@NgModule({
  declarations: [
    LoginComponent,
    MyInputDirective,

    // DebounceClickDirective,
    // LoadingComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormFieldModule,
    //material ui
    MatSliderModule,
    MatChipsModule,
    LoadingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    //debounce module
    DebounceModule,
  ],
})
export class LoginModule {}
