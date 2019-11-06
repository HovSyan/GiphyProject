import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../services/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  searchWord = '';

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
  }

  onSearchClick() {
    if (this.searchWord.length > 0) {
      this.giphyService.getGiphsBySearchWord(this.searchWord).subscribe(console.log);
    }
  }
}
