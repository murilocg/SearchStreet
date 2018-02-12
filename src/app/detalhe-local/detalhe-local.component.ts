import { Component, OnInit, Input } from '@angular/core';
import { Local } from '../pesquisa-cep/local';
@Component({
  selector: 'app-detalhe-local',
  templateUrl: './detalhe-local.component.html',
  styleUrls: ['./detalhe-local.component.css']
})
export class DetalheLocalComponent implements OnInit {
  @Input() mostrarDetalhe: boolean;
  @Input() local: Local;

  constructor() {
  }

  ngOnInit() {
  }

}
