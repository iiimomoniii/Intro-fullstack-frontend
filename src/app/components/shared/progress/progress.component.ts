import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  @Input() color: ThemePalette;
  @Input() strokeWidth: number;
  @Input() diameter: number = 100;
  @Input() mode: ProgressSpinnerMode;
  @Input() value: number;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private loadingService: LoadingService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.loadingService.attach(this.templatePortalContent, this._viewContainerRef);
  }

}
