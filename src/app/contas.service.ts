import { contas } from './contas';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class contasService {

  private readonly API = 'http://localhost:3001/contas'


  constructor(private http:HttpClient) { }

  getContas():Observable<contas[]>{

    return this.http.get<contas[]>(this.API)}



  postContas (contas:contas): Observable<contas>{

    return this.http.post<contas>(this.API, contas)}


  deleteContas (id:number): Observable<contas>{
    const url =`${this.API}/${id}`
    return this.http.delete<contas>(url)

  }

  editarContas(contas:contas): Observable<contas> {
    const url = `${this.API}/${contas.id}`
    return this.http.put<contas>(url, contas )
}

  }
