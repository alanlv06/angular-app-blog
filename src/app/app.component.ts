import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Test content 1',
      creationDate: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Test content 2',
      creationDate: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Test content 3',
      creationDate: new Date()
    }
  ];
}
