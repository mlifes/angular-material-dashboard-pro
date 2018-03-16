import { Routes } from '@angular/router';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { ValidationFormsComponent } from './validationforms/validationforms.component';
import { WizardComponent } from './wizard/wizard.component';

export const FormsRoutes: Routes = [
    {
        path: 'regular',
        component: RegularFormsComponent
    },{
        path: 'extended',
        component: ExtendedFormsComponent
    },{
        path: 'validation',
        component: ValidationFormsComponent
    },{
        path: 'wizard',
        component: WizardComponent
    }
];
