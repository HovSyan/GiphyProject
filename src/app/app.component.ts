import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly GIPHY_PAGE_URL = 'https://giphy.com/';

  onPoweredByGiphyClick() {
    window.location.href = this.GIPHY_PAGE_URL;
  }
}
