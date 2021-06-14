import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplateRef } from '@angular/core';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private overlayRef: OverlayRef = this.createOverlay();
  private templatePortal: TemplatePortal<any>;

  constructor(private overlay : Overlay) { }

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
