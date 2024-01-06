import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './_pages/register/register.component';
import { LoginComponent } from './_pages/login/login.component';
import { HomeComponent } from './_pages/home/home.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { BoardUserComponent } from './_pages/board-user/board-user.component';
import { BoardModeratorComponent } from './_pages/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './_pages/board-admin/board-admin.component';

// Chia Layout
import { LayoutComponent } from './_components/layout/layout.component';
// Các phần trong TOEIC (L & R)
import { PracticeListeningReadingComponent } from './_pages/practice-listening-reading/practice-listening-reading.component';
// Các phần trong TOEIC (S & W)
import { PracticeSpeakingWritingComponent } from './_pages/practice-speaking-writing/practice-speaking-writing.component';

import { SectionComponent } from './_pages/section/section.component';
// Chi tiết từng phần
import { StudyComponent } from './_pages/study/study.component';
import { TopicComponent } from './_pages/topic/topic.component';
import { GrammarComponent } from './_pages/grammar/grammar.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      // { path: 'home', component: HomeComponent, data: { titulo: 'Trang chủ' } },
      { path: 'home', component: HomeComponent },
      
      { path: 'profile', component: ProfileComponent },
      { path: 'user', component: BoardUserComponent },
      { path: 'mod', component: BoardModeratorComponent },
      { path: 'admin', component: BoardAdminComponent },
      
      { path: 'practice-listening-reading', component: PracticeListeningReadingComponent },
      { path: 'practice-speaking-writing', component: PracticeSpeakingWritingComponent },

      { path: 'section', component: SectionComponent },
      { path: 'study', component: StudyComponent },
      { path: 'topic', component: TopicComponent },
      { path: 'grammar', component: GrammarComponent },
    
      { path: '', redirectTo: 'home', pathMatch: 'full' }

    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }