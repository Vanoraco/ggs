
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { AppModule } from './app/app.module';
import routeConfig from './app/components/routes';
import { AppComponent } from './app/app.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  bootstrapApplication(AppComponent,
    {
      providers: [
        provideProtractorTestingSupport(),
        provideRouter(routeConfig)
      ]
    }).catch(err => console.error(err));

