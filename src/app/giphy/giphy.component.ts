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
  lastSearchedWord = '';
  searchResultGifs: Array<GifObject> = [];
  onceSearched = false;
  offset = 0;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
  }

  onSearchClick() {
    if (this.searchWord.length > 0 && this.searchWord !== this.lastSearchedWord) {
      this.lastSearchedWord = this.searchWord;
      this.offset = 0;
      this.giphyService.getGiphsBySearchWord(this.searchWord, this.offset).subscribe((result: any) => {
        this.searchResultGifs = result.data;
        this.onceSearched = true;
        console.log(this.searchResultGifs);
      }, e => console.error(e));
    }
  }

  onLoadMoreClick() {
    this.offset += 25;
    this.giphyService.getGiphsBySearchWord(this.lastSearchedWord, this.offset).subscribe((result: any) => {
      this.searchResultGifs.push(...result.data);
    }, e => console.error(e));
  }

  trackById(index, gifObject: GifObject) {
    return gifObject.id;
  }
}
