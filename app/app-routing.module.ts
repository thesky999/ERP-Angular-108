import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { TempConverterComponent } from './component/temp-converter/temp-converter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Valid URLs for the system
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'converter', component: TempConverterComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'todoList', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
