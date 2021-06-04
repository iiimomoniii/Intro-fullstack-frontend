import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navToggle = new EventEmitter();

  //Input from app for hide title 'Fullstack Web Application'
  //set alias for mobileQueryMax is media_query and has boolean type
  @Input("media_query") mobileQueryMax : boolean;

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
