import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dashboardTitles : any[]= [
    {
      "title": "Enrollment Status",
      "description": "Click here to check Enrollment Status.",
      "imgLocation": "assets/SearchEnrollment.png",
      "tileType" : "Enrollment",
      "routeLink" : "enrollment-status"
    },
    {
      "title": "Plan Details",
      "description": "Click here to check available plans and its details.",
      "imgLocation":"assets/Asset4.png",
      "tileType": "PlanDetail",
      "routeLink" : "plan-details"
    },
    {
      "title": "Submit Enrollment",
      "description": "Click here to submit new enrollment.",
      "imgLocation": "assets/SubmitDocument.png" ,
      "tileType": "SubmitEnrollment",
      "routeLink" : "submit-enrollment"
    },
    {
      "title": "24 X 7 Support",
      "description": "Click Here to get support for enrollment.",
      "imgLocation": "assets/Asset5.png",
      "tileType": "24X7Support",
      "routeLink" : "support-assistant"
    }
  ]

  constructor(private router: Router) {}

  dashboardTileClicked(tileType: string, routeLink: string){
    console.log(tileType)
    this.router.navigate([routeLink]);
  }

}
