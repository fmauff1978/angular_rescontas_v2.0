import { contas } from './contas';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { lancamentos } from './lancamentos';



@Injectable({
  providedIn: 'root'
})
export class lancamentosService {

  private readonly API = 'http://localhost:3001/tds_lctos'


  constructor(private http:HttpClient) { }

  getLctos():Observable<lancamentos[]>{

    return this.http.get<lancamentos[]>(this.API)}

}
