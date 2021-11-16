import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
	imports: [
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatMenuModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		MatSelectModule,
		MatStepperModule,
		MatAutocompleteModule
	],

	exports: [
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatMenuModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		MatSelectModule,
		MatStepperModule,
		MatAutocompleteModule
	]
})
export class MaterialModule {}
