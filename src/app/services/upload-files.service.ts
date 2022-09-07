import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('myFile', file);

    let headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin','*')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJncm91cHMiOiJmb28iLCJpYXQiOjE2NjI0NTI2MjJ9.SQenom7WuYNWdhI-EbQtzqo7-uFeXyIPvhYDsSibe8o');
    const req = new HttpRequest('POST', `${this.baseUrl}/api/test/input`, formData, {
      reportProgress: true,
      responseType: 'json',
      headers
    });
     
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
