import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  mostrar:boolean = false;
  frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidadd",
    autor: "Ben Parker",
  }

  personajes:string[] = ["Spiderman", "Venom", "Octopus"];

}
