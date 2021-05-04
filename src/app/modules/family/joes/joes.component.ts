import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joes',
  templateUrl: './joes.component.html',
  styleUrls: ['./joes.component.scss']
})
export class JoesComponent implements OnInit {

  defaultFontSizePx = 24;
  fontSizePx: number | string = 24;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: object): void {
    this.fontSizePx = this.defaultFontSizePx;
  }

}
