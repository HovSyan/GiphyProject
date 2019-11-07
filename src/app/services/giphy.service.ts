import { Injectable } from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppPropertyService} from './app-property.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private readonly GIPH_API_URL = 'giphyApiUrl';
  private readonly GIPH_API_REMOTE_KEY = 'giphyApiRemoteKey';

  constructor(private http: HttpClient,
              private appPropertyService: AppPropertyService) { }

  public getGiphsBySearchWord(searchWord: string): Observable<any> {
    forkJoin(this.appPropertyService.getAppProperty(this.GIPH_API_URL),
      this.appPropertyService.getAppProperty(this.GIPH_API_REMOTE_KEY)).subscribe((v) => {
        console.log(v);
      })

    return of(null);
  }
}
