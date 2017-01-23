import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import { API_ENDPOINT } from '../api';
import { ERROR_ACTIONS } from '../reducers/error.reducer';
import { HttpParams } from '../models/httpParams.interface';

@Injectable()
export class HttpWrapperService {
  /*
    These are the methods that are used in the additional services, 
    where otherwise they would require importing angular 2 http module.

    This keeps the services DRY, easier to test, and scalable.

  */

  constructor(private http: Http) { }

  private configRequest(uri: string, authRequired: boolean = false): {apiUrl: string, options: RequestOptions} {
    let apiUrl = `${API_ENDPOINT()}/${uri}`;

    let headers = authRequired ? 
      new Headers({
        'Content-Type': 'application/json',
        'Authorization' : `token ${localStorage['Authorization']}`
      }) : 
      new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return {apiUrl, options};
  }

  public delete(params: HttpParams){
    let {apiUrl, options} = this.configRequest(params.uri, true)

    return this.http.delete(apiUrl, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: ERROR_ACTIONS.REPORT_ERROR,
        payload: {
          action_type: params.errorActionType,
          message: res.json().error
        }
      }));
  }

  public get(params: HttpParams){
    let {apiUrl, options} = this.configRequest(params.uri, params.auth)

    return this.http.get(apiUrl, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: ERROR_ACTIONS.REPORT_ERROR,
        payload: {
          action_type: params.errorActionType,
          message: res.json()
        }
      }))
  }

  public post(params: HttpParams){

    let {apiUrl, options} = this.configRequest(params.uri, params.auth)
    
    return this.http.post(apiUrl, params.payload, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: ERROR_ACTIONS.REPORT_ERROR,
        payload: {
          action_type: params.errorActionType,
          message: res.json().error
        }
      }));
  }

  put(params: HttpParams){
    let {apiUrl, options} = this.configRequest(params.uri, true)

    return this.http.put(apiUrl, params.payload, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: ERROR_ACTIONS.REPORT_ERROR,
        payload: {
          action_type: params.errorActionType,
          message: res.json().error
        }
      }));
  }
}