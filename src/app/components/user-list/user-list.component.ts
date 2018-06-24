import {Component} from '@angular/core';
import {User} from '../../provider/model/user.model';
import {AuthService} from '../../provider/service/auth.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {

    users: User[] = [];

    constructor(authService: AuthService) {
        authService.getList()
            .subscribe(response => this.users = response);
    }
}
