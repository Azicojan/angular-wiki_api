import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) { }

  search(keyword: string) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${keyword}&format=json&origin=*`;
    return this.http.get(apiUrl);
  }


}

