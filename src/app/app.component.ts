import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I Saw a tree'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'A pic of a mountain'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1222',
      content: 'I Saw a bike'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1222',
      content: 'I Saw a bike'
    },
  ]
}
