import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  
  saludo = 'saludo nuevo componente'

  constructor() { }

  ngOnInit() {
  }

}
