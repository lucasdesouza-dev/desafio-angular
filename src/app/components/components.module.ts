import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PessoasComponent } from './listagem/pessoas/pessoas.component';
import { PlanetasComponent } from './listagem/planetas/planetas.component';
import { FilmesComponent } from './listagem/filmes/filmes.component';
import { EspeciesComponent } from './listagem/especies/especies.component';
import { VeiculosComponent } from './listagem/veiculos/veiculos.component';
import { EspaconavesComponent } from './listagem/espaconaves/espaconaves.component';
import { RotaComponent } from './rota/rota.component';
import { ListaComponent } from './lista/lista.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    PessoasComponent,
    PlanetasComponent,
    FilmesComponent,
    EspeciesComponent,
    VeiculosComponent,
    EspaconavesComponent,
    RotaComponent,
    ListaComponent,
   
  ],
  imports: [
    CommonModule,RouterModule,HttpClientModule
    
  ],exports:[
    ButtonComponent,
    HeaderComponent, 
    PessoasComponent,
    PlanetasComponent,
    FilmesComponent,
    EspeciesComponent,
    VeiculosComponent,
    EspaconavesComponent,
    RotaComponent,
    ListaComponent,],
  providers: [],
 
})
export class ComponentsModule { }
