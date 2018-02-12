import { Component, OnInit, NgModule } from '@angular/core';
import { Local } from './local';
import { HttpClient } from '@angular/common/http';

const URL_GEO_CODE = "https://maps.google.com/maps/api/geocode/json?address=";
const URL_GEO_CODE_INVERSE = "https://maps.google.com/maps/api/geocode/json?latlng=";

@Component({
  selector: 'app-pesquisa-cep',
  templateUrl: './pesquisa-cep.component.html',
  styleUrls: ['./pesquisa-cep.component.css']
})
export class PesquisaCepComponent implements OnInit {

	mostrarPesquisa: boolean;
  local: Local;
  coordenadas: any;

  constructor(private http: HttpClient) { 
  	
    this.mostrarPesquisa = true;
    
    this.local = new Local();
    
    this.coordenadas = {
      lat: -19.9510439,
      lng: -43.934014
    };
  }

  ngOnInit() {

  }

  pesquisarCep(): void {
    this.http.get(URL_GEO_CODE + this.local.cep).subscribe(response=> {
      
        if(response['results'].length > 0){
          this.extrairDadosCep(response['results'][0]);
       
          var url = URL_GEO_CODE_INVERSE + this.coordenadas.lat + ","+ this.coordenadas.lng;
          this.http.get(url).subscribe(response => {
          
          this.extrairDadosDaCoordenada(response['results'][0]);

          this.togglePesquisa();
        });
      }
    });
  }

  // extrai dados mais especificos, como o nome da rua e o numero.
  extrairDadosDaCoordenada(results: any){
        var address = results.address_components;
        this.local.numero = address[0].long_name;
        this.local.endereco = address[1].long_name;
  }

  // extrai os dados relativos ao cep (dados mais genéricos).
  extrairDadosCep(result: any){
      var address = result.address_components;
      this.local.cep = address[0].long_name;
      this.local.bairro = address[1].long_name;
      this.local.cidade = address[2].long_name;
      this.local.uf = address[3].long_name;
      this.coordenadas = result.geometry.location;
  }

  // inverte estado da pesquisa.
  togglePesquisa(): void {
    this.mostrarPesquisa = !this.mostrarPesquisa;
  }

  // este método é executado em consequência ao evento keyup.
  formatarCep(){
    var c = this.local.cep.charCodeAt(this.local.cep.length - 1);
    // caso o caracter digitado não seja um numero, remove ele do cep.
    if(c < 48 || c > 57 ){
      this.local.cep = this.local.cep.substring(0, this.local.cep.length - 1);
    }
    // adiciona '-' ao cep.
    else if(this.local.cep.length == 6){
      this.local.cep = this.local.cep.substring(0, 5) + "-" + this.local.cep.charAt(5);
    }
  }
}
