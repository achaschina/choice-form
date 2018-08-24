import { Component } from '@angular/core';
import { Element } from './element.model';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  element: Element = new Element('Папка', '1 Г', ' Мой диск', 'я', new Date, new Date);
  resultArr = [];

  onclick() {

    for (let prop in this.element) {
      let arr = [];
      arr.push(prop);
      arr.push(this.element[prop]);
      this.resultArr.push(arr);
    }
    console.log(this.resultArr);
  }
}
