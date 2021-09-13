import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() creationDate: Date;
  color: string;

  constructor() {}

  ngOnInit() {}

  changeColor = () => {
    return this.color === 'Love It !' ? 'green' : 'red';
  };

  getColor = () => {
    return this.color;
  };
}
