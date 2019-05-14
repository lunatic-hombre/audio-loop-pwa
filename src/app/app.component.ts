import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  start(): void {
    const audio = new Audio();
    audio.src = 'assets/short-loop.mp3';
    audio.loop = true;
    audio.play();
  }

}
