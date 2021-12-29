import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages : any[] = [];

  constructor(
    private wikipedia: WikipediaService,
  ){}
  onTerm(e:string) {
    this.wikipedia.search(e).subscribe((pages) =>{
      this.pages = pages;
    })
  }
} 
