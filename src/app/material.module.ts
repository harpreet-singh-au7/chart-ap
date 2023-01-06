import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
    exports:[
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatMenuModule
    ]
})

export class MaterialExampleModule {}