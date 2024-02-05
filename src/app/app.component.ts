import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  currentComponent = 0;
  currentIndex: number | null = null;

  data: any = [];
  dataForConverter: any = [];
  dates: any = [];
  ready: boolean = false;
  names: any = [];

  getDates() {
    for (let i = 11; i + 1 > 0; i--) {
      let date: Date = new Date(new Date().setMonth(new Date().getMonth() - i));
      this.dates.push(date);
    }
  }

  ngOnInit(): void {
    let url = 'http://localhost/php/index.php';
    let tempArr: any = [];

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (let j = 0; j < 12; j++) {
          if (tempArr.length < 1) {
            for (const i in data[0]) {
              this.names.push(i);

              tempArr.push({
                name: i,
                rate: [],
              });
            }
          }

          for (const i in data[j]) {
            const index = Object.keys(data[j]).indexOf(i);
            tempArr[index]['rate'][j] = Number(data[j][i]);
          }
        }

        this.getDates();

        this.dataForConverter = data[data.length - 1];
        this.data = tempArr;
        this.ready = true;
      });
  }
}
