import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PesquisaCepComponent } from './pesquisa-cep/pesquisa-cep.component';
import { MapaComponent } from './mapa/mapa.component';
import { DetalheLocalComponent } from './detalhe-local/detalhe-local.component';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaCepComponent,
    MapaComponent,
    DetalheLocalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXUmL8jNsy6Z7a-xhsSx_caGVDhaN3aAw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
