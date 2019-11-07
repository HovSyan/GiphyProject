import {Injectable} from '@angular/core';

import propertiesJSON from '../../app-config.json';

@Injectable({
  providedIn: 'root'
})
export class AppPropertyService {
  public getAppProperty(propertyKey: string): string {
    return propertiesJSON[propertyKey];
  }
}
