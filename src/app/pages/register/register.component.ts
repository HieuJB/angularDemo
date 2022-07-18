import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, of, Subscription, timer } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Loading } from '../../services/loading/loading';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loading: Loading
  ) {
    this.createForm();
  }
  data: Subscription;
  loadingSub: Subscription;
  createForm(): void {
    this.angForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.loadingSub = this.loading.selectedLoading$.subscribe((value) => {
      this.isLoading = value;
    });
  }
  onSubmit() {
    this.loadingSub = this.loading.selectedLoading$.subscribe((value) => {
      this.isLoading = value;
    });
    this.data = this.authService.getUsers().subscribe((value) => {
      console.log(value);
    });
  }
  //computed
  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }
}