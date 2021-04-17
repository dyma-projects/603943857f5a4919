import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public link = {
    label: 'Mon lien qui ne mène nulle part',
    href: 'http://monlien.com/23343234'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
