import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GuiaInformationComponent } from '../components/guia-information/guia-information.component';
import { GuiaTituloComponent } from '../components/guia-titulo/guia-titulo.component';
import { GuiaContenidoComponent } from '../components/guia-contenido/guia-contenido.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, GuiaInformationComponent, GuiaTituloComponent, GuiaContenidoComponent]
})
export class HomePageModule {}
