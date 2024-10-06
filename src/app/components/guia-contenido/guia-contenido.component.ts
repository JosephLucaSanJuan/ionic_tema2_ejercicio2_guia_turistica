import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-guia-contenido',
  templateUrl: './guia-contenido.component.html',
  styleUrls: ['./guia-contenido.component.scss'],
})
export class GuiaContenidoComponent  implements OnInit {

  @Input('name') name:string = "";
  @Input('text') text:string = "";
  @Input('image') image:string = "";
  constructor() { }

  ngOnInit() {}

}
