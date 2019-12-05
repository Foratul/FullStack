import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PruebaService implements OnInit {


  ngOnInit(): void {

    throw new Error("Method not implemented.");
  }

  constructor(protected http: HttpClient) { }
}
