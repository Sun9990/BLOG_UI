import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  
  openConfirmDialog(msg : any){
    return this.dialog.open(ConfirmDialogComponent,{
      width: '30%',
      panelClass : 'confirm-dialog-container',
      disableClose: true,
      // position: {top: "100px"},
      // preferably send only data in this function , avoid sending CSS
      data: {  
        message : msg
      }
    });
  }
 }
