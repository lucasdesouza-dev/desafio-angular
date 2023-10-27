import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListagemComponent } from 'src/app/components/listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from 'src/app/components/listagem/pessoas/pessoas.component';
import { PlanetasComponent } from 'src/app/components/listagem/planetas/planetas.component';
import { FilmesComponent } from 'src/app/components/listagem/filmes/filmes.component';
import { EspeciesComponent } from 'src/app/components/listagem/especies/especies.component';
import { VeiculosComponent } from 'src/app/components/listagem/veiculos/veiculos.component';
import { EspaconavesComponent } from 'src/app/components/listagem/espaconaves/espaconaves.component';
import { DetalhesComponent } from 'src/app/components/detalhes/detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemComponent,
    children: [
      {
        path: 'peoples',
        component: PessoasComponent,
        children: [
          {
            path: ':id',
            component: DetalhesComponent,
          }]
      }, {
        path: 'planets',
        component: PlanetasComponent,
        children: [
          {
            path: ':id',
            component: DetalhesComponent,
          }]
      }, {
        path: 'films',
        component: FilmesComponent,
        children: [
          {
            path: ':id',
            component: DetalhesComponent,
          }]
      }, {
        path: 'species',
        component: EspeciesComponent,
        children: [
          {
            path: ':id',
            component: DetalhesComponent,
          }]
      }, {
        path: 'vehicles',
        component: VeiculosComponent,
        children: [
          {
            path: ':id',
            component: DetalhesComponent,
          }]
      }, {
        path: 'starships',
        component: EspaconavesComponent,
        children: [
          {
            path: ':id',
            component: DetalhesComponent,
          }]
      },
    ]
  },
];

@NgModule({
  declarations: [ListagemComponent],

  exports: [ComponentsModule],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class ListagemModule { }
