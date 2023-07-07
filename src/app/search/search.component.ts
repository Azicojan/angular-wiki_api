import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResults!: any[];
  keyword!: string;


  constructor(private wikipediaService: WikipediaService){ }

  search(){
    this.wikipediaService.search(this.keyword).subscribe((response: any) => {
      this.searchResults = response[1];
      console.log(this.searchResults);
      this.keyword = '';
    })
  }



}
