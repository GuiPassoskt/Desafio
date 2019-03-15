import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Setup';
  opened = true
  events = [];
  links:any = [
    {name:'Tasks', view:'#'},
    {name:'Contents', view:'#'},
    {name:'Setup', view:'#'}
  ];
  constructor(){}

}
