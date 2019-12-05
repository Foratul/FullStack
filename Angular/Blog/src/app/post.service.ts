import { Injectable } from '@angular/core';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrayPosts: Post[];

  constructor() {
    console.log("constructor servicio")
    this.arrayPosts = []
    for (let i = 0; i < 55; i++) {

      this.arrayPosts.push(
        new Post(
          {
            titulo: `titulo ${i}`,
            texto: "texto" + i,
            autor: Math.random() > 0.5 ? "PEREZ" : "SANCHEZ",
            imagen: "imagen" + i,
            fecha: Date(),
            categoria: Math.random() > 0.5 ? "categorized" : "uncategorized"
          })
      )
    }
  }


  agregarPost(post: Post): Promise<string> {
    console.log(this.arrayPosts)
    let prom = new Promise<string>((resolve, reject) => {

      this.arrayPosts.push(post)

      //   ;
      console.log("pusheado")
      resolve("Exito en el teletransporte")
      reject("Ha habido un error");
    })

    return prom
  }

  getAllPosts() {
    return this.arrayPosts
  }

  getAllPostsPromise(): Promise<Post[]> {
    let prom = new Promise<Post[]>((resolve, reject) => {
      if (this.arrayPosts != null) {
        console.log("resolve")
        resolve(this.arrayPosts)
      }
      else {
        console.log("reject")
        reject("HA HABIDO UN ERROR")
      }

    })
    return prom
  }



  getPostsByCampo(campo = "autor", valor = "SANCHEZ", array = this.arrayPosts): Promise<Post[]> {
    console.log("Campo: " + campo + "Valor: " + valor)
    let prom = new Promise<Post[]>(function (resolve, reject) {
      if (array != null) {
        console.log("resolve")
        resolve(array.filter((item) => { return item[campo] == valor }))
      }
      else {
        console.log("reject")
        reject("HA HABIDO UN ERROR")
      }
    })
    return prom;
  }




  ordenarPorFecha() {

    return this.arrayPosts.sort(function (a, b) {
      return a.fecha - b.fecha
    })

  }
}
