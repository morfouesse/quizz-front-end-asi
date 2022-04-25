import {Component, OnInit} from '@angular/core';
import {SurveyHttpClientService} from "../../services/survey-http-client.service";
import {Observable} from "rxjs";
import {ISurvey} from "../../../models/i-survey";

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.less']
})


export class SurveysComponent implements OnInit {

  public surveys$: Observable<ISurvey[]> = new Observable<ISurvey[]>();

  public constructor(private surveyHttpClient: SurveyHttpClientService) {
  }

  public ngOnInit(): void {
    this.surveys$ = this.surveyHttpClient.getSurveys();
  }

}
