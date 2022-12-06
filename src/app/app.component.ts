import { Component } from '@angular/core';
import { Notice } from 'src/models/notice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fisgon_proyect';
  showNoticies = true;
  notices : Array<Notice> = [];
}
