import { Component } from '@angular/core';

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
}
