import {Component} from '@angular/core';
import {AuthService} from '../../provider/service/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    errorMessage = false;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    login(mail: string, password: string) {
        this.errorMessage = false;
        this.authService.login(mail, password)
            .subscribe(response => {
                this.errorMessage = !response;
                if (response == true) {
                    this.router.navigate(['ciclos']);
                }
            });
    }
}
