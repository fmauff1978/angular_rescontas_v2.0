
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { AgregadosComponent } from './componentes/agregados/agregados.component';
import { ContasComponent } from './componentes/contas/contas.component';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LancamentosComponent } from './componentes/lancamentos/lancamentos.component';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    AgregadosComponent,
    ContasComponent,
    LancamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  NgbModule, HttpClientModule ],
  providers: [{provide: LOCALE_ID,useValue:'pt'},{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
