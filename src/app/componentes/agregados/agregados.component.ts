import { agregadosService } from './../../agregados.service';
import { Component, OnInit } from '@angular/core';
import { agregados } from 'src/app/agregados';

@Component({
  selector: 'app-agregados',
  templateUrl: './agregados.component.html',
  styleUrls: ['./agregados.component.css'],
  providers: [agregadosService]
})
export class AgregadosComponent implements OnInit {

  agregados: agregados[]=[]

  constructor(private service: agregadosService) { }

  ngOnInit(): void {

    this.service.getAgregados().subscribe((agregados)=>{
      this.agregados = agregados
    });
  }

}
