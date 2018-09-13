import { Login } from "./login";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export default class Api {
    constructor(private httpClient: HttpClient) {
    }

    login(login: Login) {
        return this.httpClient.post(
            '/api/auth',
            login);
    }
}