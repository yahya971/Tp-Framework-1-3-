import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ListeEmbauchesComponent } from './liste-embauches/liste-embauches.component';
import { EmbauchesComponent } from './embauches/embauches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardEmbaucheComponent } from './card-embauche/card-embauche.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:'cvs',component:CvComponent
  },
  {
    path:'embauches',component:EmbauchesComponent
  },
  {
    path: 'Profile/:id', component: ProfileComponent
  },
  {
    path:'**',component:CvComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DefaultImagePipe,
    ListeEmbauchesComponent,
    EmbauchesComponent,
    CardEmbaucheComponent,
    ProfileComponent,


    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
  RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
