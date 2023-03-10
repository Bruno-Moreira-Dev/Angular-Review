import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  constructor() { }

  ngOnInit() { }

  criarPensamento() {
    alert('Novo pensamento criado!' + this.pensamento.conteudo + this.pensamento.autoria);
  }

  cancelar() {
    alert('Ação cancelada');
  }
}
