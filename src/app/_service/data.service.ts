import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToPo } from '../_interface/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private serverUrl = 'http://localhost:3000';

  constructor(
    private _http: HttpClient
  ) { }

  //GET

  public getToPo(): Observable<ToPo[]> {
    const httpOptions ={
        headers: new HttpHeaders({'Content-Type':'application/json'
        })
    }
    return this._http.get<ToPo[]>(`${this.serverUrl}/todos`);
  }

  //POST
  public postToPo(object: ToPo): Observable<ToPo> {
      const httpOptions ={
          headers: new HttpHeaders({'Content-Type':'application/json'
          })
      }
      return this._http.post<ToPo>(`${this.serverUrl}/todos`, object, httpOptions);
    }

  //DELETE
  public deleteToPo(object: ToPo): Observable<ToPo> {
    const httpOptions ={
        headers: new HttpHeaders({'Content-Type':'application/json'
        })
    }
    return this._http.delete<ToPo>(`${this.serverUrl}/todos/${object.id}`, httpOptions);
      }


}
