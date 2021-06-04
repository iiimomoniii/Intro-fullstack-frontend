import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navToggle = new EventEmitter();

  mailNoti : number;
  noti : number;

  constructor() { }

  ngOnInit(): void {
    this.mailNoti = 50;
    this.noti = 2;
  }

  onClickNavToggle(){
    this.navToggle.emit();
  }
}
