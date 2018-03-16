import { Routes } from "@angular/router";
import { AdminComponent } from "app/admin/admin.component";
import { DashboardComponent } from "app/@theme/components/dashboard/dashboard.component";


export const AdminRoutes : Routes = [
    {
        path:'',
        component:AdminComponent,
        children:[
            {
                path:'',
                component:DashboardComponent
            },
            {
                path:'components',
                loadChildren:'../@theme/components/components/components.module#ComponentsModule'
            },
            {
                path:'forms',
                loadChildren:'../@theme/components/forms/forms.module#Forms'
            },
            {
                path:'tables',
                loadChildren:'../@theme/components/tables/tables.module#TablesModule'
            },
            {
                path:'maps',
                loadChildren:'../@theme/components/maps/maps.module#MapsModule'
            },
            {
                path:'widgets',
                loadChildren:'../@theme/components/widgets/widgets.module#WidgetsModule'
            },
            {
                path:'charts',
                loadChildren:'../@theme/components/charts/charts.module#ChartsModule'
            },
            {
                path:'calendar',
                loadChildren:'../@theme/components/calendar/calendar.module#CalendarModule'
            }
        ],
        
    }
]