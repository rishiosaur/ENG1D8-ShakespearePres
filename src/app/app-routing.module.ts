import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {MedicineComponent} from './medicine/medicine.component';
import {EconomyComponent} from './economy/economy.component';
import {ConflictComponent} from './conflict/conflict.component';
import {CulturalTrendsComponent} from './cultural-trends/cultural-trends.component';
import {LawComponent} from './law/law.component';

let routes: Routes;
routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'medicine', component: MedicineComponent},
  {path: 'economy', component: EconomyComponent},
  {path: 'conflict', component: ConflictComponent},
  {path: 'law', component: LawComponent},
  {path: 'culture', component: CulturalTrendsComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
