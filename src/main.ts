import { bootstrapApplication } from '@angular/platform-browser';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/lint';
import 'codemirror/mode/javascript/javascript';
import jsonlint from 'jsonlint';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

window.jsonlint = jsonlint;

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
