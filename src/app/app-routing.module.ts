import { AgregadosComponent } from './componentes/agregados/agregados.component';
import { LancamentosComponent } from './componentes/lancamentos/lancamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasComponent } from './componentes/contas/contas.component';

const routes: Routes = [

{path: 'contas', component: ContasComponent},
{path: 'lctos', component: LancamentosComponent},
{path: 'agregados', component: AgregadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
