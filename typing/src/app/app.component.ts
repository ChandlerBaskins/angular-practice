import { Component } from '@angular/core';
import { lorem } from 'faker';
import { CompileMetadataResolver } from '@angular/compiler';
import { stringify } from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence()
  enteredText: string = '';
  correct: boolean = false;

  onInput(value: string) {
    this.enteredText = value
    if(value === this.randomText) {
      this.correct = true;
    }
  }
compare(randomLetter: string, enteredLetter: string) {
  if(!enteredLetter) {
    return 'pending'
  }
 return randomLetter === enteredLetter ? 'correct' : 'incorrect';
}

}
