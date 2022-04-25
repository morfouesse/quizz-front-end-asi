import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ISurvey} from "../../../models/i-survey";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.less'],
  // me permet de changer un élément d'angular dans un span qui refuse d'etre modifié
  encapsulation: ViewEncapsulation.None
})
export class SurveyComponent implements OnInit {

  @Input() public survey!: ISurvey;

  public constructor() { }

  public ngOnInit(): void {
  }

}
