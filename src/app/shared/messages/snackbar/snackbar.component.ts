
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { NotificationService } from '../notification.service';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden',style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible',style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.do(message => {
      this.message = message
      this.snackVisibility = 'visible'
      
    }).switchMap(message => timer(300))
    .subscribe(message => this.snackVisibility = 'hidden')
  }

  stateSnack() {
    this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden'
    console.log('clicado')
  }

}
