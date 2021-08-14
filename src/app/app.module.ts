import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { RouteGuard, LoginRouteGuard } from './route.guard';
import { AppOverlayModule } from './overlay/overlay.module';
import { ProgressSpinnerModule, ProgressSpinnerComponent } from './progress-spinner/progress-spinner.module';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// // import { AddJobComponent } from './add-job/add-job.component';

// import { GooglePlaceModule } from "ngx-google-places-autocomplete";
// import { NewTickectComponent } from './new-tickect/new-tickect.component';
// import { NewTicketComponent } from './new-ticket/new-ticket.component';

// import { UsersComponent } from './users/users.component';
// import { TechniciansComponent } from './technicians/technicians.component';
// import { CategoryComponent } from './category/category.component';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    // GooglePlaceModule
  ],
  declarations: [],
  // imports: [ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
})
export class MaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: false,
    }),
    HttpClientModule,

    MaterialModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule,
    AppOverlayModule,
    ProgressSpinnerModule
  ],
  entryComponents: [ProgressSpinnerComponent],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [MatNativeDateModule, RouteGuard, LoginRouteGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
