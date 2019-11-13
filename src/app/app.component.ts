import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly GIPHY_PAGE_URL = 'https://giphy.com/';
  private readonly GITHUB_PAGE_URL = 'https://github.com/HovSyan/GiphyProject';
  private readonly FACEBOOK_PAGE_URL = 'https://www.facebook.com/HovhanneSahakyan';

  ngOnInit() {
    document.addEventListener('click', (event) => {
      console.log(event);
    })
  }

  onPoweredByGiphyClick() {
    window.location.href = this.GIPHY_PAGE_URL;
  }

  onGithubClick() {
    window.location.href = this.GITHUB_PAGE_URL;
  }

  onFacebookClick() {
    window.location.href = this.FACEBOOK_PAGE_URL;
  }
}
