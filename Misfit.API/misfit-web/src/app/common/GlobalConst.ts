import { HttpHeaders } from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };
export const GlobalVariable = Object.freeze({
    BASE_API_URL: 'https://localhost:44374/api/',
    httpOptions : {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'False'
      // 'Authorization': 'my-auth-token'
    })
    // new HttpHeaders('Content-Type': 'multipart/form-data');
    // .append( ).append('Accept', 'application/json')
    // const headers = new Httpeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    // 'Content-Type', 'application/json'
  }
});
