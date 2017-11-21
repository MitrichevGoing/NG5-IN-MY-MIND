import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ItemsResponse {
  results: string[];
}

class Person {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  results: Person[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get<Person[]>('/ng/list', { headers }).subscribe(data => {
       console.log(data);
       this.results = data;
    }, err => {
      console.log(err);
    });
  }
}
