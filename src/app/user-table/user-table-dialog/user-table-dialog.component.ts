import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { title } from 'process';
import { UserModel } from 'src/app/remote-models/user-model';

interface UserDetails {
  id_user: number,
  first_name: string;
  last_name: string;
  role: string;
  status: string;
  userSkills: Array<String>;
  userWorkingAreas: Array<String>;
}
//Hola
interface UsedAddress {
  state_name: string,
  colony_name: string,
  municipality_name: string,
  main_number: number,
  interior_number: number
  street_name: string
}

export interface DialogData {
  userInformation: UserDetails,
  userAddressInformation: UsedAddress,
  userProfessions: string,
  userAreas: string
}

@Component({
  selector: 'app-user-table-dialog',
  styleUrls: ['./user-table-dialog.component.css'],
  templateUrl: './user-table-dialog.component.html'
})

export class UserTableDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
  ngOnInit(): void { }
}


