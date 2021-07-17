import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMyContainer: boolean = false;
  
  demoButtonClick() {
    this.showMyContainer = !this.showMyContainer;
    $('i').toggleClass('fa-chevron-down fa-chevron-up');
  }

}
