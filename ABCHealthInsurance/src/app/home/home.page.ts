import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  isLightMode: boolean = true;
  isDarkMode: boolean = false;
  menuType: string = 'overlay';

  toggleTheme(event: any) {
    try {
      if (this.isLightMode) {
        document.body.setAttribute('color-theme', 'dark');
        this.isLightMode = false;
        this.isDarkMode = true;
      }
      else if (this.isDarkMode) {
        document.body.setAttribute('color-theme', 'light');
        this.isLightMode = true;
        this.isDarkMode = false;
      }
    } catch (e) {

    }
  }

}
