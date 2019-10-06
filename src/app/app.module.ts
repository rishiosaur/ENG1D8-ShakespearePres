import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MedicineComponent } from './medicine/medicine.component';
import { ConflictComponent } from './conflict/conflict.component';
import { EconomyComponent } from './economy/economy.component';
import { LawComponent } from './law/law.component';
import { CulturalTrendsComponent } from './cultural-trends/cultural-trends.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    ConflictComponent,
    EconomyComponent,
    LawComponent,
    CulturalTrendsComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
