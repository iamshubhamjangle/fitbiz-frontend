import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

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
    var name = $('#demoName').val();
      alert( name + " Jquery Working!");
  }

}
