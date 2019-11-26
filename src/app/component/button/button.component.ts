import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickEvent.emit();
  }
}
