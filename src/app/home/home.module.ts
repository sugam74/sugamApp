import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent }   from './home.component';
import { routing } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {Ng2Webstorage} from 'ng2-webstorage';
@NgModule({
  imports: [routing,CommonModule,FormsModule,ReactiveFormsModule,Ng2FilterPipeModule,Ng2Webstorage,
     

        ],
  declarations: [HomeComponent],
  
})
export class HomeModule {}
