import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  historicoOperaciones =[];

  constructor() {
    if(localStorage.getItem('historicoOperaciones')!= null){
      this.historicoOperaciones= JSON.parse(localStorage.getItem('historicoOperaciones'));
    }
   }

   calcular(num1,num2,operacion){
    switch(operacion) { 
      case 'suma': { 
         return this.sumar(num1,num2); 
      }  
      case 'resta': { 
         return this.restar(num1,num2); 
      }  
      case "multiplicacion": { 
         return this.multiplicar(num1,num2); 
      }  
      case "division": { 
         return this.dividir(num1,num2); 
      } default:{
        return 0;
      }      
   } 


   }

  sumar(num1,num2){
    let suma =num1 + num2;
    this.historicoOperaciones.push({operacion: "suma",
  total : suma});
    localStorage.setItem('historicoOperaciones',JSON.stringify(this.historicoOperaciones));
    return suma;
  }
  restar(num1,num2){
    let resta = num1 - num2 ;
    this.historicoOperaciones.push({operacion: "resta",
    total : resta});
    return resta;
  }
  dividir(num1,num2){
    let division =  num1 / num2;
    this.historicoOperaciones.push({operacion: "division",
    total : division});
    return division;
  }
  multiplicar(num1,num2){
    let mult =  num1 * num2;
    this.historicoOperaciones.push({operacion: "mult",
    total : mult});
    return mult;
  }
  quitar(item){
    let pos = this.historicoOperaciones.indexOf(item);
    this.historicoOperaciones.splice(pos,1);
  }

  recuperarHistorico(){
    return this.historicoOperaciones
  }





}
