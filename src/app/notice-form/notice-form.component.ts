import { Component } from '@angular/core';
import { Notice } from 'src/models/notice';
import { Input } from "@angular/core";

@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html',
  styleUrls: ['./notice-form.component.scss']
})


export class NoticeFormComponent {

  @Input() notices : Array<Notice> = [];

  notice : Notice = {
    id: 0,
    title: '',
    date: '',
    description: '',
    author: ''
  }

  createNotice(e: Event) {
    e.preventDefault();
    const newNotice = {
      id: this.notices.length + 1,
      title: this.notice.title,
      date: this.notice.date,
      description: this.notice.description,
      author: this.notice.author
    }
    this.notices.push(newNotice);
    this.clearNotice(e);
    // console.log(this.notices);
    alert('Noticia creada');
  }

  clearNotice(e: Event) {
    e.preventDefault();
    this.notice.title = '';
    this.notice.date = '';
    this.notice.description = '';
    this.notice.author = '';
  }
}
