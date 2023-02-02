import { Component, OnInit } from '@angular/core';
import { contas } from 'src/app/contas';
import { contasService } from 'src/app/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css'],
  providers: [contasService]
})
export class ContasComponent implements OnInit {

  
  contas :contas[]=[]


  constructor(private service: contasService){}
  
    ngOnInit(): void {
      this.service.getContas().subscribe((contas)=>{
  
        this.contas =  contas
  
  });}}
  
 
