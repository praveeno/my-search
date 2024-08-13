import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  options = ["Obsidian Notes", "Job Search"];

  searchGoogle(option: string, query: string) {
    const encodedQuery = encodeURIComponent(getQueryBasedOnOptions(option, query));
    const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;
    window.open(googleUrl, '_blank');
  }
}

function getQueryBasedOnOptions(option: string, query: string) {
  switch (option) {
    case "Obsidian Notes":
      return `inurl:publish.obsidian.md/* "${query}"`;
    case "Job Search":
      const date = new Date();
      date.setDate(1);
      const firstDayOfMonth = date.toISOString().slice(0, 10);
      const sites = [
        "jooble.org", "lever.co", "greenhouse.io", 
        "join.com", "personio.com", "personio.de",
        "glassdoor.com", "uk.indeed.com",
        "jobs.ashbyhq.com",
        "jobs.*.com/*"
      ].map(x => `site:http://${x}`).join(" | ")
      return sites + `(developer | engineer) "remote" "${query}" after:${firstDayOfMonth}`
    default:
      return query;
  }
}

