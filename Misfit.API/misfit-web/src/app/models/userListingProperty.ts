export class UserListProperty {
  constructor(pageNo: number, pageSize: number ) {
    this.pageNumber = pageNo;
    this.pageSize = pageSize;
  }
    userName: string;
    startDate: string;
    endDate: string;
    sortBy: string;
    sortingOrder: string;
    pageNumber: number;
    pageSize: number;
  }
