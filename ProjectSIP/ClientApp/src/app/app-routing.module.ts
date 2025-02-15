import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { DocsComponent } from './main/docs/docs.component';
import { MessagesComponent } from './main/messages/messages.component';
import { HelpComponent } from './main/help/help.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotauthComponent } from './notauth/notauth.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainComponent, children: [
    { path: '', component: DocsComponent },
    { path: 'docs', component: DocsComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'help', component: HelpComponent }
  ] },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'notauth', component: NotauthComponent },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
