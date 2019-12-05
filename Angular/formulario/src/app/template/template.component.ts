import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('parrafoppal', { static: false }) parrafo: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  onSubmit(formulario) {

    // se recoge del objeto ngForm. value
    console.log(formulario)
    this.parrafo.nativeElement.style.backgroundColor = 'red'

  }
}
