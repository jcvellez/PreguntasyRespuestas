import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'FrontEnd Cliente';
  /* Interpolacion y PropertyBinding
  textoPlaceholder='Escriba aqui por favor';
  nombre= 'Princeso';
  deshabilitado=true;
  imgSrc="https://www.kindpng.com/picc/m/75-750111_angularjs-hd-png-download.png";
  constructor(){
    setInterval(()=>this.deshabilitado=false,3000);
  }
  getSuma(n1: number,n2: number){
    return n1 + n2;
  };*/
  /* Event Binding
  texto= 'Esto es un video sobre event binding';
  cambiarTexto():void{
    this.texto='En el PROXIMO video veremos Two Way data-binding';
  }*/
  //texto= 'Hola a todos';

  listaEstudiantes: any[]= [
    { nombre:"Juank Velez", estado:"Promocionado" },
    { nombre:"Patricia Funes", estado:"Libre" },
    { nombre:"Juan Garcia", estado:"Regular" },
    { nombre:"Martha Perez", estado:"Regular" },
    { nombre:"Nicolas Gomez", estado:"Libre" }
  ]

  mostrar=true;
  toogle(): void{
    this.mostrar= !this.mostrar;
  }
}