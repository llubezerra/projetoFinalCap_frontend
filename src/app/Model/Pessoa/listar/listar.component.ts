import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/Service/servico.service';
import { Pessoa } from '../entidade/Pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit{

  listaPessoa: Pessoa[] = [];
  constructor(private service: ServicoService) { }

  //observable
  ngOnInit(){
    this.service.getPessoa()
    .subscribe(data => {
      this.listaPessoa = data;
    }
    )
  }

  editar(id: any): void {
    localStorage.setItem("id",id.toString());
  }
}