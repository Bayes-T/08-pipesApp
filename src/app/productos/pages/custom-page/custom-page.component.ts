import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styles: [
  ]
})
export class CustomPageComponent  {


  public palabra:string = "hola"

  public isUpperCase:boolean = false
  public heros:Hero[] = [
    {name:"Superman",
     canFly: true,
     color: Color.blue},

     {name:"Batman",
     canFly: false,
     color: Color.black},

     {name:"flash",
     canFly: false,
     color: Color.red},

     {name:"Robin",
     canFly: false,
     color: Color.green},
     
     {name:"Linterna Verde",
     canFly: true,
     color: Color.green}
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  }

  public valorBy:keyof Hero | null = 'name'

  sortBy(value: keyof Hero | null){
   return this.valorBy = value
  }

}
