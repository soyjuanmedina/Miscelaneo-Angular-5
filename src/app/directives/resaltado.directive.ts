import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public element: ElementRef) { 
    console.log('directivas llamada');
    // element.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input("appResaltado") nuevoColor: string;
  
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar( null );
  }

  private resaltar( color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }


}
