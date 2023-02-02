
import { Component, OnInit } from '@angular/core';

import { lancamentos } from 'src/app/lancamentos';
import { lancamentosService } from 'src/app/lancamentos.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css'],
  providers: [lancamentosService]
})
export class LancamentosComponent implements OnInit {

  lancamentos :lancamentos[]=[]


  constructor(private service: lancamentosService){}

    ngOnInit(): void {
      this.service.getLctos().subscribe((lancamentos)=>{

        this.lancamentos =  lancamentos

  });}}
