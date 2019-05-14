import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  audio: HTMLAudioElement;

  shortLoop(): void {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio();
    this.audio.src = 'assets/short-loop.mp3';
    this.audio.loop = true;
    this.audio.play();
  }

  longLoop(): void {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio();
    this.audio.src = 'assets/long-loop.mp3';
    this.audio.loop = true;
    this.audio.play();
  }

}
