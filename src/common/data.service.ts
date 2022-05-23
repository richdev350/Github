import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './app.constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public api = url.apiurl;

  constructor(private http: HttpClient) {}

  getAllPublicRepository(userName: any) {
    return this.http.get(this.api + `users/${userName}/repos`);
  }

  getCommits(userName: any, reponame: any) {
    return this.http.get(this.api + `repos/${userName}/${reponame}/commits`);
  }
}
