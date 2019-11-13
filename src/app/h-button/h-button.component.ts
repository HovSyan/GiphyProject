import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-h-button',
  templateUrl: './h-button.component.html',
  styleUrls: ['./h-button.component.css']
})
export class HButtonComponent implements OnInit {

  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  @Input() innerText: string;

  constructor() { }

  ngOnInit() {}

  onClick(event) {
    this.clickEvent.emit(event);
  }
}
