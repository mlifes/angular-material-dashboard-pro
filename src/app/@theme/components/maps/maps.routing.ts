import { Routes } from '@angular/router';
//
import { FullScreenMapsComponent } from './fullscreenmap/fullscreenmap.component';
import { GoogleMapsComponent } from './googlemaps/googlemaps.component';
import { VectorMapsComponent } from './vectormaps/vectormaps.component';

export const MapsRoutes: Routes = [
    {
      path: 'fullscreen',
      component: FullScreenMapsComponent
    },{
      path: 'google',
      component: GoogleMapsComponent
    },{
      path: 'vector',
      component: VectorMapsComponent
    }
];
