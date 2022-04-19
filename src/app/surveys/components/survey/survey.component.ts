import {Component, Input, OnInit} from '@angular/core';
import {ISurvey} from "../../../models/i-survey";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.less']
})
export class SurveyComponent implements OnInit {

  @Input() survey!: ISurvey;

  constructor() { }

  ngOnInit(): void {
  }

}
