
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // foi importado o snackBar do material para exibição de mensagens 
import { EMPTY, Observable } from 'rxjs';
import { Product } from './product-create/product.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  // injetando o SnackBar // injetando o http
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  // metodo showMessege para mensagem 
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  //  criando todos os metodos de interação com o back-end dentro desse aquivo

  // função responsável por inserir no back-end um novo produto atravéz de uma requisição http
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe( // foi adicionado um pipe que retorna um observable
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // funcão para tratar o erro 
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  // Método responsável por ler os produtos cadastrados no back
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe( // foi adicionado um pipe que retorna um observable
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Método para leitura de um único elemento a partir do get
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe( // foi adicionado um pipe que retorna um observable
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // metodo put para atualização dos produtos 
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe( // foi adicionado um pipe que retorna um observable
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );

  }
  // metodo delete para deletar o produto 
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe( // foi adicionado um pipe que retorna um observable
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
