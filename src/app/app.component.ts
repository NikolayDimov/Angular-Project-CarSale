import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Кris\'s Cars Website';

  // scroll to the top when change routes
  // onActive(){
  //   window.scroll(0, 0);
  // }
}
