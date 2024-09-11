import { importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes, withComponentInputBinding()),
  provideHttpClient(), 
  importProvidersFrom(HttpClient)
];
