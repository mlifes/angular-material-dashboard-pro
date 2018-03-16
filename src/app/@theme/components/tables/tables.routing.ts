import { Routes } from '@angular/router';

import { ExtendedTableComponent } from './extendedtable/extendedtable.component';
import { RegularTableComponent } from './regulartable/regulartable.component';
import { DataTableComponent } from './datatable.net/datatable.component';

export const TablesRoutes: Routes = [
    {
      path: 'regular',
      component: RegularTableComponent
    },{
      path: 'extended',
      component: ExtendedTableComponent
    },{
      path: 'datatables.net',
      component: DataTableComponent
    }
];
