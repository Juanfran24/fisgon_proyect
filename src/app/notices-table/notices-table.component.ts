import { Component } from '@angular/core';
import { Input } from "@angular/core";
import { Notice } from 'src/models/notice';

@Component({
  selector: 'app-notices-table',
  templateUrl: './notices-table.component.html',
  styleUrls: ['./notices-table.component.scss']
})
export class NoticesTableComponent {

  @Input() notices : Array<Notice> = [];
  noticesFilter : Array<Notice> = [];

  noticeEdit : Notice = {
    id: 0,
    title: '',
    date: '',
    description: '',
    author: ''
  }

  filter = '';
  filterFor = '';
  showFormEdit = false;

  editNotice(e: Event, notice: Notice) {
    e.preventDefault();
    this.noticeEdit = {
      id: notice.id,
      title: notice.title,
      date: notice.date,
      description: notice.description,
      author: notice.author
    };
    this.showFormEdit = true;
  }

  updateNotice(e: Event) {
    e.preventDefault();
    this.notices.map((notice: Notice) => {
      if (notice.id == this.noticeEdit.id) {
        notice.title = this.noticeEdit.title;
        notice.date = this.noticeEdit.date;
        notice.description = this.noticeEdit.description;
        notice.author = this.noticeEdit.author;
      }
    });
    alert('Noticia actualizada');
    this.showFormEdit = false;
  }

  cancelEdit(e: Event) {
    e.preventDefault();
    this.showFormEdit = false;
  }

  filterNotices() {
    if(this.filterFor === 'author'){
      // const noticeFiltered = this.notices.map(notice => {
      //   if (notice.author === this.filter){
      //     return notice;
      //   }
      // });
      // this.noticesFilter = noticeFiltered;
    }else{
      // const noticeFiltered = this.notices.map(notice => {
      //   if (notice.date === this.filter){
      //     return notice;
      //   }
      // });
      // this.noticesFilter = noticeFiltered;
    }
  }

}
