import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';

@Injectable()
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    getList(): Observable<User[]> {
        return this.http.get<User[]>('http://localhost:9099/api/auth/');
    }


    login(login: string, password: string): Observable<boolean> {
        return this.http.post<User>(
            'http://localhost:9099/api/auth/',
            {
                'login': login.trim(),
                'password': password.trim()
            }, this.httpOptions)
            .map(user => {
                if (user && user.token) {
                    localStorage.setItem('token', user.token);
                    return true;
                }
                return false;
            });
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLogged() {
        const token = localStorage.getItem('token');
        if (token) {
            return new JwtHelper().isTokenExpired(token) == false;
        }
        return false;
    }

    getCurrentUser(): Observable<User> {
        const token = localStorage.getItem('token');
        console.log('token', token);
        return this.http.post<User>(
            'http://localhost:9099/api/auth/user-token/',
            {
                'token': token
            },
            this.httpOptions);
    }
}