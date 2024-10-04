import { Component } from '@angular/core';
import { options } from './search-options';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  options = options;

  searchGoogle(option: string, query: string) {
    const encodedQuery = encodeURIComponent(search(options, option, query));
    const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;
    window.open(googleUrl, '_blank');
  }
}

function search(options: any, selection: any, query: string): any {
  for (const option of options) {
    console.log(option)
    if (option.name === selection) {
      return option.query(query);
    }
    if (option.children) {
      const result = search(option.children, selection, query);
      if (result) {
        return result;
      }
    }
  }
  return null;
}