import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_pages/login/login.component';
import { RegisterComponent } from './_pages/register/register.component';
import { HomeComponent } from './_pages/home/home.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { BoardAdminComponent } from './_pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_pages/board-user/board-user.component';
import { SectionComponent } from './_pages/section/section.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './_utils/material.module';

import { LayoutComponent } from './_components/layout/layout.component';
import { HeaderComponent } from './_components/layout/header/header.component';
import { FooterComponent } from './_components/layout/footer/footer.component';
import { SliderComponent } from './_components/layout/slider/slider.component';

import { TopicComponent } from './_pages/topic/topic.component';
import { StudyComponent } from './_pages/study/study.component';
import { GrammarComponent } from './_pages/grammar/grammar.component';
import { ListeningReadingComponent } from './_components/listening-reading/listening-reading.component';
import { SpeakingWritingComponent } from './_components/speaking-writing/speaking-writing.component';
import { PracticeListeningReadingComponent } from './_pages/practice-listening-reading/practice-listening-reading.component';
import { PracticeSpeakingWritingComponent } from './_pages/practice-speaking-writing/practice-speaking-writing.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SectionComponent,
    TopicComponent,
    StudyComponent,
    GrammarComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ListeningReadingComponent,
    SpeakingWritingComponent,
    PracticeListeningReadingComponent,
    PracticeSpeakingWritingComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MaterialModule
  ],

  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }