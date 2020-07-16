import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

const routes = {
    listItem: (c: Input) => `/cards?name=${c.input}`,
    detailItem: (c: Detail) => `/cards?id=${c.id}`
}; 

export interface Input {
    input: any;
}

export interface Detail {
    id: any;
}

@Injectable({
    providedIn: 'root',
})
export class ListService {  
    constructor(
        private httpClient: HttpClient
    ) { }

    getList(context: Input): Observable<any> {
        return this.httpClient.get(routes.listItem(context));
    }

    getDetail(context: Detail): Observable<any> {
        return this.httpClient.get(routes.detailItem(context));
    }
}