import { Component ,OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/service/dialog.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              private dialogService : DialogService) { }

  ngOnInit(): void {
    
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
