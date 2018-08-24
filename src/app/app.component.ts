import { Component } from '@angular/core';
import { Element } from './element.model';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private visible = true;
  private active = true;
  element: Element = new Element('', '1 Г', ' Мой диск', 'я', new Date, new Date);
  resultArr = [];

  onSelect(event: any) {

    this.element.Тип = event.target.getAttribute('typeContent');

      this.visible = this.visible ? false : this.visible;
      
      this.resultArr = [];
      for (let prop in this.element) {
        let arr = [];
        arr.push(prop);
        if (this.element[prop] instanceof Date) {

          let options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          };

          arr.push(this.element[prop].toLocaleString("ru", options));

        } else {

          arr.push(this.element[prop]);

        }

        this.resultArr.push(arr);

      // }
      // console.log(this.resultArr);
    }

  }

  setActive() {
    this.active = !this.active;
  }
}
