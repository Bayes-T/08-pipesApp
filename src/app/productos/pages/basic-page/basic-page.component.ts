import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower:string = "nicolás"
  public nameUpper:string = "NICOLÁS"
  public fullName:string = "NiColAs SabOGAl"

  public customDate: Date = new Date()
}
