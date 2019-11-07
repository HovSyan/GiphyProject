import { Injectable } from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppPropertyService} from './app-property.service';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private readonly GIPH_API_URL = 'giphyApiUrl';
  private readonly GIPH_API_REMOTE_KEY = 'giphyApiRemoteKey';

  constructor(private http: HttpClient,
              private appPropertyService: AppPropertyService) { }

  public getGiphsBySearchWord(searchWord: string): Observable<any> {
    const url = this.appPropertyService.getAppProperty(this.GIPH_API_URL);
    const remoteKey = this.appPropertyService.getAppProperty(this.GIPH_API_REMOTE_KEY);

    return this.http.get(`${url}gifs/search?api_key=${remoteKey}&q=${searchWord}`);
  }
}
