import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {

  //i-18n select
  public name:string = "Nicolas"
  public gender: 'male' | 'female' = "male"

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = "Paula"
    this.gender = "female"
  }

  //i-18n select plural

  public clientes:string[] = ["Cliente 1", "Cliente 2", "Cliente 3"]
  public clientMap = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos 1 cliente esperando',
    'other' : 'tenemos  # clientes esperando'
  }
  atenderCliente():void {
    this.clientes.shift()
  }

  //key value pipe

  public person = {
    nombre: "Nicolás",
    edad: 23,
    dirección: "Bogotá"
  }


  //async pipe

  //lo que crea el observable es el interval
  //el observable retorna un tipo numero, pero con operadores lo puedo transformar(como con map)
  public myObservableTimer:Observable<number> = interval(2000)
  .pipe(
    tap(value => console.log(value))
  )

  public promiseValue:Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 2500);
  })
}
