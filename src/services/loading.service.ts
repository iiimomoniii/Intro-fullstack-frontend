import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplateRef } from '@angular/core';
import { Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private overlayRef: OverlayRef = this.createOverlay();
  private templatePortal: TemplatePortal<any>;

  //passive callback call by next and subscribe when need
  indeterminate : Subject<boolean> = new Subject();

  constructor(private overlay : Overlay) {
    this.indeterminate.subscribe(
      show => {
        //check overlay in first time
        if (show && !this.overlayRef.hasAttached()){
          this.showSpinner();
          //check 
        } else if (!show && this.overlayRef.hasAttached()) {
          this.hideSpinner()
        }
      }
    )
   }

  private createOverlay() : OverlayRef {
    return this.overlay.create({
      hasBackdrop : true,
      backdropClass : 'custom-backdrop',
      positionStrategy: this.overlay.position()
      .global()
      .centerVertically()
      .centerHorizontally()
    });
  }

  showSpinner(){
    this.overlayRef.attach(this.templatePortal);
  }

  private hideSpinner(){
    this.overlayRef.detach();
  }

  attach(templatePortalContent : TemplateRef<any>, viewContainerRef : ViewContainerRef) {
    this.templatePortal = new TemplatePortal(templatePortalContent, viewContainerRef);
  }
}
