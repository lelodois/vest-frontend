export class User {

    private _id: number;
    private _login: string;
    private _password: string;
    private _admin: boolean;
    private _token: string;
    private _lastLogin: Date;

    get lastLogin(): Date {
        return this._lastLogin;
    }

    set lastLogin(value: Date) {
        this._lastLogin = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get admin(): boolean {
        return this._admin;
    }

    set admin(value: boolean) {
        this._admin = value;
    }
}