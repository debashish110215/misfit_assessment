import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCalculation } from '../models/ceUserCalculation';
import { UserService } from '../services/user-service';
import { CalculationService } from '../services/calculation-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-modal-create-calculation',
  templateUrl: './modal-create-calculation.component.html',
  styleUrls: ['./modal-create-calculation.component.css']
})
export class ModalCreateCalculationComponent implements OnInit {
  isCalculated = true;
  public calForm: FormGroup;
  isUserExists = false;
  submitted = false;

  constructor(public userService: UserService, public calculationService: CalculationService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ModalCreateCalculationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}
  pattern = /^[+/-]?(0|[1-9]\d*)(\.\d+)?$/;
  ngOnInit() {
    this.calForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      num1: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern(this.pattern)]),
      num2: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern(this.pattern)]), //, Validators.pattern('^-?\d*\.?\d*$')
    sum: new FormControl(''),
    userId: new FormControl('0')
  });
}

checkUserExistence(value: string) {
  this.isUserExists = false;
  this.userService.getUserByName(value).subscribe(data => {
    if (data.data !== null) {
      this.isUserExists = true;
      this.calForm.controls.userId.setValue(data.data.id);
    }
  });
}
public hasError = (controlName: string, errorName: string) => {
  return this.calForm.controls[controlName].hasError(errorName);
}

public onCancel = () => {
}

public createCal = (calFormValue) => {
  if (this.calForm.valid) {
    this.executeOwnerCreation(calFormValue);
  }
}
  onNoClick(): void {
    this.dialogRef.close();
  }

  private executeOwnerCreation = (calFormValue) => {
    if (!this.submitted) {
      this.submitted = true;
      const userCal: UserCalculation = {
        userId: calFormValue.userId,
        userName: calFormValue.name,
        num1: calFormValue.num1,
        num2: calFormValue.num2,
        sum: ''
      };

      this.userService.postModel(userCal).subscribe(data => {
        this.calForm.controls.sum.setValue(data.data.sum);
        if (data.success) {
          this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 5 * 1000,
            data: data.success
          });
        }
      });
    }
  }
}
