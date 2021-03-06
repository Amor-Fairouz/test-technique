import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() value: string;
  @Output() userClick = new EventEmitter<string>();

  handleClick() {
    this.userClick.emit('');
  }
}
