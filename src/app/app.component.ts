import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'fullstack-front-end-angular';

  mobileQueryMax: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    //detect resolution
    changeDetectorRef: ChangeDetectorRef,
    //match resolution and condition
    media: MediaMatcher
  ) {
    //decare _mobileQueryListener for detect by detectChanges method
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //decare max width for condition
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)');
    //add condition
    this.mobileQueryMax.addEventListener('change', this._mobileQueryListener);
  }

  //clear 
  ngOnDestroy() : void{
    this.mobileQueryMax.removeEventListener('change', this._mobileQueryListener);
  }

}

