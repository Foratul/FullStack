import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorDAOService } from 'src/app/profesor-dao.service';

@Component({
  selector: 'app-editarprofesores',
  templateUrl: './editarprofesores.component.html',
  styleUrls: ['./editarprofesores.component.css']
})
export class EditarProfesoresComponent implements OnInit {
  id: any
  profesor: any

  constructor(private activatedRoute: ActivatedRoute, private profesorDAO: ProfesorDAOService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(async (params) => {
      this.id = params.profesorID
      this.profesor = await this.profesorDAO.getAll()[params.profesorID]
      console.log(this.profesor)










    })

  }

}
