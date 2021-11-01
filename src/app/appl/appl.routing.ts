import { Routes } from '@angular/router';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { StatusComponent } from './status/status.component';



export const AppSettingsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'status',
      component: StatusComponent
    },
    {
      path: 'email-settings',
      component: EmailSettingsComponent
    }
    ]
  }
];
