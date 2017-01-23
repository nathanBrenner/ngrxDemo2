import { Injectable } from '@angular/core';

import { HttpWrapperService } from './http-wrapper.service';
import { SESSION_ACTIONS } from '../reducers/session.reducer';
import { HttpParams } from '../models/httpParams.interface';

@Injectable()
export class SessionService {

  constructor(private httpWrapperService: HttpWrapperService) {}

  getUser(){
    let getParams: HttpParams = {
      auth: true,
      errorActionType: SESSION_ACTIONS.GET_USER.FAILURE,
      responseObject: 'user',
      successActionType: SESSION_ACTIONS.GET_USER.SUCCESS,
      uri: 'user'
    }
    return this.httpWrapperService.get(getParams);
  }

  loginUser(payload: {email: string, password: string}){
    let postParams: HttpParams = {
      auth: false,
      errorActionType: SESSION_ACTIONS.LOGIN_USER.FAILURE,
      payload: payload,
      responseObject: 'account',
      successActionType: SESSION_ACTIONS.LOGIN_USER.SUCCESS,
      uri: 'user'
    }
    return this.httpWrapperService.post(postParams);
  }

  registerUser(payload: {username: string, email: string, password: string, verify_password: string}){
    let postParams: HttpParams = {
      auth: false,
      errorActionType: SESSION_ACTIONS.REGISTER_USER.FAILURE,
      payload: payload,
      responseObject: 'account',
      successActionType: SESSION_ACTIONS.REGISTER_USER.SUCCESS,
      uri: 'users'
    }
    return this.httpWrapperService.post(postParams)
  }

}
