import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfosModule } from './infos/infos.module';

const routes: Routes = [
  { path : '',  loadChildren: () => import('./infos/infos-routing.module').then(m => m.InfosRoutingModule) },
  { path : 'game',  loadChildren: () => import('./game/game-routing.module').then(m => m.GameRoutingModule) },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
