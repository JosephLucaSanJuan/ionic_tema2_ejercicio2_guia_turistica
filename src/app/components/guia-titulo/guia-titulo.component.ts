import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guia-titulo',
  templateUrl: './guia-titulo.component.html',
  styleUrls: ['./guia-titulo.component.scss'],
})
export class GuiaTituloComponent  implements OnInit {

  @Input('title') title:string = "";
  @Input('icon') icon:string = "";
  constructor() { }

  ngOnInit() {}

}
