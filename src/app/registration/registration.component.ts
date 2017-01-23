import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { QuestionService } from '../shared/services/question.service';
import { SESSION_ACTIONS } from '../shared/reducers/session.reducer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  questions: any[];

  constructor(
    private questionService: QuestionService, 
    private _store: Store<any>,
    private router: Router
  ) {
	  this.questions = questionService.getRegistrationQuestions();
  }

  ngOnInit() {
  }

  onSubmitRegistrationForm(payload){
    this._store.dispatch({
      type: SESSION_ACTIONS.REGISTER_USER.ATTEMPT,
      payload: payload
    });
    setTimeout(() => this.router.navigate(['/']), 1000);
  }

}
