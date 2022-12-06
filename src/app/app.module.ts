import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeFormComponent } from './notice-form/notice-form.component';
import { NoticesTableComponent } from './notices-table/notices-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeFormComponent,
    NoticesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
