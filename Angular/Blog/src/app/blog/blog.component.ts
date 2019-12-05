import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  selector: any = "autor"
  arrayPosts: Post[]
  mensaje: String;
  textofiltrado: any;
  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPostsPromise()
      .then((lista) => { this.arrayPosts = lista })
      .catch((mensaje) => { this.mensaje = mensaje })
  }

  filtrar(tipoFiltro = "absoluto", campo = "autor", valor = "SANCHEZ", array = this.arrayPosts) {
    //ESTAMOS REPITIENDO CODIGO, PERO PROMESAS NO SE PUEDEN CONCATENAR CUAL FILTROS DEL TIRON
    // Y NO ME ATREVO A METER UN THEN Y CATCH EN UNA FUNCION COMUN
    campo = this.selector
    valor = this.textofiltrado;
    //FILTRA LOS RESULTADOS ACTUALES, LE PASAMOS EL ARRAY ACTUAL
    // EL SWITCH ME DA TOC
    if (tipoFiltro === "relativo") {
      this.postService.getPostsByCampo(campo, valor, this.arrayPosts)
        .then((lista) => { this.arrayPosts = lista })
        .catch((mensaje) => { this.mensaje = mensaje; })
    }
    //FILTRA EL MODELO ENTERO , DADO QUE SIN PARAMETRO = TODO EL MODELO, POR DEFINICION DEL METODO
    if (tipoFiltro === "absoluto") {
      this.postService.getPostsByCampo(campo, valor)
        .then((lista) => { this.arrayPosts = lista })
        .catch((mensaje) => { this.mensaje = mensaje; })
    }
  }
  //       function procesar(mierdas : Promise) {mierdas
  //                 .then((lista) => { this.arrayPosts = lista })
  //                 .catch((mensaje) => { this.mensaje = mensaje; })


}
