import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { QuestionService } from '../shared/services/question.service';
import { SESSION_ACTIONS } from '../shared/reducers/session.reducer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  questions: any[];

  constructor(
    private questionService: QuestionService,
    private _store: Store<any>,
    private router: Router
  ) {
	  this.questions = questionService.getLoginQuestions();
  }

  ngOnInit() {
  }

  onSubmitLoginForm(payload){
    this._store.dispatch({
      type: SESSION_ACTIONS.LOGIN_USER.ATTEMPT,
      payload: payload
    })
    setTimeout(() => this.router.navigate(['/']), 2000);
  }

}
