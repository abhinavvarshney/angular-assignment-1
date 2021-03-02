import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'assignment-one';

  sampleData = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

  hideText: boolean = false;
  count: number = 0;
  data: string[] = [];

  ngOnInit() {
    console.log(this.count);
  }

  toggleDisplay() {
    this.hideText = !this.hideText;
    this.count += 1;
    console.log(this.count);
  }

  addData(newData: string) {
    if (newData) {
      this.data.push(newData);
    }
  }
  resetList() {
    this.data = [];
  }
}
