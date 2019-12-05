import { Component, OnInit } from '@angular/core';
import { ProfesorDAOService } from 'src/app/profesor-dao.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']


})


export class ListaProfesoresComponent implements OnInit {


  arrayProfesores: any = []
  constructor(private profesorDAO: ProfesorDAOService,
    private router: Router) { }

  ngOnInit() {

    this.profesorDAO.getAll().then((res) => { this.arrayProfesores = res })

    console.log(this.arrayProfesores)

  }

  editar(profesor) {
    this.router.navigate(['/profesores/edit/' + profesor.id], profesor);



  }


}


