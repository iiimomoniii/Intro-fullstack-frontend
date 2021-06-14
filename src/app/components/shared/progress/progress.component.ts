import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  
  @Input() color: ThemePalette;
  @Input() strokeWidth : number;
  @Input() diameter : number = 100;
  @Input() mode: ProgressSpinnerMode;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {

  }

}
