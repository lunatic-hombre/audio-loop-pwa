import {Component} from '@angular/core';
import {Howl} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  howl: Howl;

  shortLoop(): void {
    if (this.howl) {
      this.howl.unload();
    }
    this.howl = new Howl({
      src: 'assets/short-loop.mp3',
      loop: true,
      autoplay: true,
      html5: true,
    });
  }

  longLoop(): void {
    if (this.howl) {
      this.howl.unload();
    }
    this.howl = new Howl({
      src: 'assets/long-loop.mp3',
      loop: true,
      autoplay: true,
      html5: true,
    });
    this.howl.fade(0, 1, 3000);
  }

}
