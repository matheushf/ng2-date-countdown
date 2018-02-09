import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CountDownModule } from './app.module';

platformBrowserDynamic().bootstrapModule(CountDownModule);