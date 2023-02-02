import { contas } from './contas';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { agregados } from './agregados';




@Injectable({
  providedIn: 'root'
})
export class agregadosService {

  private readonly API = 'http://localhost:3001/agregados'


  constructor(private http:HttpClient) { }

  getAgregados():Observable<agregados[]>{

    return this.http.get<agregados[]>(this.API)}

}
