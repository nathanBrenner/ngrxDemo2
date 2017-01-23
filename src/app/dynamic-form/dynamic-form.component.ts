import { Component, Input, OnInit, EventEmitter, Output}  from '@angular/core';
import { FormGroup} from '@angular/forms';

import { QuestionBase }  from '../shared/question-base';
import { QuestionControlService } from '../shared/services/question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  providers: [ QuestionControlService ]
})

export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Output() onSubmit = new EventEmitter();
  
  form: FormGroup;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }
}