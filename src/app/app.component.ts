import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angmat';
  WorkDataList: any[] = [];

  getData(item: string) {
    this.WorkDataList.push({ id: this.WorkDataList.length, name: item });
    console.warn(this.WorkDataList);
  }
  Remove(id: number) {
    this.WorkDataList = this.WorkDataList.filter((item) => item.id !== id);
  }
}
