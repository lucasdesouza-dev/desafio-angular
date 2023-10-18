import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  loadChildren: () =>
    import('./pages/home/home.module').then(m => m.HomePageModule),
}, 
{
  path: 'listagem',
  loadChildren: () =>
    import('./pages/listagem/listagem.module').then(m => m.ListagemModule),
}, 
{ path: '**', redirectTo: '' },
 {path: 'listagem', redirectTo: '' },];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules,})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
