import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  providers:[CalculadoraService]
})
export class CalculadoraComponent implements OnInit {

  campoNum1=0;
  campoNum2=0;
  campoTotal=0;
  seleccion = "";
  historicoOperaciones =[];

  constructor(public calculadoraService : CalculadoraService) { }

  ngOnInit() {
    this.historicoOperaciones=this.calculadoraService.recuperarHistorico();
  }

  eventoClickCalcular($event){
    let total = 0;

    total=this.calculadoraService.calcular(this.campoNum1,this.campoNum2,this.seleccion);
    
    this.campoTotal=total;
    
    this.historicoOperaciones=this.calculadoraService.recuperarHistorico();
  }

  eventoClickBorrar($event,item){
    $event.preventDefault();
    this.calculadoraService.quitar(item);
  }

}
