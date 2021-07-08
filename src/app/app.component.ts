import { Component, VERSION } from '@angular/core';
import candidateData from './candidate.json';
interface Candidate {
  id: number;
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ';
  title = 'custom-search-filter-example';
  searchedKeyword: string;
  candidates: Candidate[] = candidateData;
}
