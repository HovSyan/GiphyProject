import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../services/giphy.service';
import {GifObject} from '../model/Gif';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  searchWord = '';
  searchResultGifs: Array<GifObject> = [];
  offset = 0;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
  }

  onSearchClick() {
    if (this.searchWord.length > 0) {
      this.giphyService.getGiphsBySearchWord(this.searchWord, this.offset).subscribe((result: any) => {
        this.searchResultGifs = result.data;
        console.log(this.searchResultGifs);
      }, e => console.error(e));
    }
  }
}
