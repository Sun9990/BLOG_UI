import { Component } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-check-dialog',
  templateUrl: './check-dialog.component.html',
  styleUrls: ['./check-dialog.component.css']
})
export class CheckDialogComponent {
  title = 'confirmDialog';

  constructor(private dialogService:DialogService){}

  // this.dialogService.openConfirmDialog("Are you sure you want to delete this blog?")
  //     .afterClosed().subscribe((res:any) =>{
  //       console.log(res);
  // })

  openDialog(){
    this.dialogService.openConfirmDialog("Are you sure you want to delete this blog?")
      .afterClosed().subscribe((res:any) =>{
        console.log(res);

    // this.dialogService.openConfirmDialog({
    //   title:'Confirm',
    //   message:'Are you sure?',
    //   confirmText:'Yes',
    //   cancelText:'No'
    });
  }
}
