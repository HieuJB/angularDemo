import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Loading {
  private isLoading$ = new BehaviorSubject<boolean>(false);
  selectedLoading$ = this.isLoading$.asObservable();
  handleSetLoading(params: boolean) {
    this.isLoading$.next(params);
  }
}
