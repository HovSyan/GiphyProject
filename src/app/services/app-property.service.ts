import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppPropertyService {
  constructor(private http: HttpClient) { }

  public getAppProperty(propertyKey: string): Observable<string> {
    const domainAndPort = this.getDomainAndPort();
    return this.http.get(`${domainAndPort}/${propertyKey}`).pipe(
      map(result => result.toString())
    );
  }

  private getDomainAndPort() {
    const hrefInArray = window.location.href.split('/');
    return hrefInArray[0] + '//' + hrefInArray[2];
  }
}
