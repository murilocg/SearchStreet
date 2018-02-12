import { Component, OnInit, Input } from '@angular/core';
import { Local } from '../pesquisa-cep/local';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  // configurações do Mapa.
  @Input() lat: number = -32.9477132;
  @Input() lng: number = -60.630465800000025;
  @Input() zoom: number = 17;
  
  // configurações do marcador.
  @Input() icon: string = "../assets/images/marker.png";

  constructor() { }

  ngOnInit() {
  }

}
