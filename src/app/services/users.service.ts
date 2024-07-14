import { Injectable } from '@angular/core';
import { IUser } from '../Models/i-user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:Partial<IUser>[]=[]

  private userSubject = new BehaviorSubject<IUser[]>([]);
  users$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAllUsers().subscribe(
      users => {
        this.userSubject.next(users);
      }
    );
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${environment.usersUrl}/${id}`)
    .pipe(
      catchError(error => {
        console.error('Error fetching user:', error);
        throw error;
      })
    );
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.usersUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          throw error;
        })
      );
  }

}
