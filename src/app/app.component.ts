import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = "codexmaker";
  nombre2 = "samuel vAzquez ruIz";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.28;

  costoVenta = 1234.5;

  figuraAnime = {
    nombre: "Alicia",
    clave: "075648isd",
    marca: "Vertex",
    precio: 42.00,
    estado:"10/10",
    ubicacion:{
      Pais: "Mexico",
      calle: "VolcanAgua",
      envio: 10
    }
  }

  valorDePromesa = new Promise( ( resolve, reject)=>{

    setTimeout( ()=>resolve("Llego la data!"), 3500 );
  });

  fecha = new Date();

  video = "YXpZ0uRMDR0";

  activar:boolean = true;
}
