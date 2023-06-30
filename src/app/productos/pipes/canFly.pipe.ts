import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class canFly implements PipeTransform {
    transform(value: boolean, vuela:boolean = value): string {
        if(vuela) {
            return "Puede volar"
        } else {
            return "No puede volar"
        }
    }
}