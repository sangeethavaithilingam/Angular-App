import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  "results" = [
    {
        "id": "1",
        "name": "RDJ",
        "movies": "100"
    },
    {
        "id": "2",
        "name": "Tom Holland",
        "movies": "3"
    },
    {
        "id": "3",
        "name": "Benedict Cumberbatch",
        "movies": "10"
    },
    {
        "id": "4",
        "name": "Chris Hemsworth",
        "movies": "30"
    },
    {
        "id": "5",
        "name": "Chris Evans",
        "movies": "20"
    }];
  getUsers() {
    console.log(this.results);
    return this.results;
        }
}