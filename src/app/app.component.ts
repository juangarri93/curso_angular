import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'Juan';
  mostrar = false;
  personas=[];

  eventoClickHolamundo($event){
    let textoFinal='hola mundo jajaja';
    this.nombre=textoFinal;
    this.mostrar= !this.mostrar;
    this.personas.push({
      nombre:'Juan',
      edad:this.personas.length+1
    });
  
  }
}
