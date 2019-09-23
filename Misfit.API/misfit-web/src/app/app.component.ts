import { Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { UserService } from './services/user-service';
import { UserListProperty } from './models/userListingProperty';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatDatepickerInputEvent, MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalCreateCalculationComponent } from './modal-create-calculation/modal-create-calculation.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() dateChange: EventEmitter<MatDatepickerInputEvent<any>>;
  title = 'misfit-web';
  userCalcultaionList: any[];
  dataSource = new MatTableDataSource(this.userCalcultaionList);
  displayedColumns: string[] = ['createdOn', 'userName', 'num1', 'num2', 'sum' ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  listingProperty = new UserListProperty(1, 10);
  sortedData: any[];
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private userService: UserService, public dialog: MatDialog) {

  }
  sortData(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'createdOn':
          this.listingProperty.sortBy = 'CreatedOn';
          this.listingProperty.sortingOrder = isAsc ? 'asc' : 'desc';
          break;
      case 'userName':
          this.listingProperty.sortBy = 'UserName';
          this.listingProperty.sortingOrder = isAsc ? 'asc' : 'desc';
          break;
      case 'num1':
          this.listingProperty.sortBy = 'Num1';
          this.listingProperty.sortingOrder = isAsc ? 'asc' : 'desc';
          break;
      case 'num2':
          this.listingProperty.sortBy = 'Num2';
          this.listingProperty.sortingOrder = isAsc ? 'asc' : 'desc';
          break;
      case 'sum':
          this.listingProperty.sortBy = 'Sum';
          this.listingProperty.sortingOrder = isAsc ? 'asc' : 'desc';
          break;
      default:
          break;
    }

    this.getUserCalculations();
  }

  ngOnInit() {
    this.getUserCalculations();
    this.dataSource.sort = this.sort;
  }

  getUserCalculations() {
    this.userService.getAllForList(this.listingProperty).subscribe(data => {
      this.userCalcultaionList = data.data.tableData;
      this.dataSource = new MatTableDataSource(this.userCalcultaionList);
      this.length = data.data.totalRows;
      // this.sortedData = this.userCalcultaionList.slice();
      // this.dataSource.paginator = this.paginator;
      // console.log(this.userCalcultaionList);
    });
  }


  applyUserNameFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    this.listingProperty.userName = filterValue;
    this.getUserCalculations();
  }

  onStartDate(event): void {
    this.listingProperty.startDate = event;
    this.getUserCalculations();
  }

  onEndDate(event): void {
    this.listingProperty.endDate = event;
    this.getUserCalculations();
  }
  getServerData(event?: PageEvent) {
    this.listingProperty.pageNumber = event.pageIndex + 1;
    this.listingProperty.pageSize = event.pageSize;
    this.getUserCalculations();
  }

  createCalculationDialog() {
    const dialogRef = this.dialog.open(ModalCreateCalculationComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUserCalculations();
    });
  }
}

