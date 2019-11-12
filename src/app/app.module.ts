import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import {FormsModule} from '@angular/forms';
import {GiphyService} from './services/giphy.service';
import {HttpClientModule} from '@angular/common/http';
import {LazyLoadImageModule, scrollPreset} from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    }),
  ],
  providers: [
    GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
