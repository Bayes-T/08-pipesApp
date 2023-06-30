import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    //se pueden agrupar y crear un array con los argumentos con un value:string, ...args:any
    transform(value: string, toUpper: boolean = false):string {
        if(toUpper) return value.toUpperCase()
         else {
            return value.toLocaleLowerCase()
        }   
    }
}