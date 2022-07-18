import { Injectable } from '@angular/core';
import { ServerHttpService } from '../../config/server-http.service';
import { catchError } from 'rxjs/operators';
import { Observable, of, finalize } from 'rxjs';
import { User } from '../../model/auth';
import { Loading } from '../loading/loading';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private server: ServerHttpService, private loading: Loading) {}
  public getUsers(): Observable<User[]> {
    this.loading.handleSetLoading(true);
    return this.server.httpClient
      .get<User[]>(
        `${this.server.REST_API_SERVER}/users`,
        this.server.httpOptions
      )
      .pipe(
        catchError(this.server.handleError),
        finalize(() => this.loading.handleSetLoading(false))
      );
  }
}
