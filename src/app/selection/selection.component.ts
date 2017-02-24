import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FileReader} from "../FileImport";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  genders = [{id: 0, gender: "boy"},{ id:1, gender:"girl"}];
  currentGender: number = 0;
  newData: string ="ABC";
  constructor() { }

  onChange(val){
    this.currentGender = val;
  }

  onSubmit(){
    console.log("HERE");
    let fr:FileReader = new FileReader();
    let data = fr.read(this.currentGender);
    this.newData = data;
  }

  myGroup: FormGroup = new FormGroup({
    minNameLength: new FormControl('3'),
    maxNameLength: new FormControl('7'),
    modelOrder: new FormControl('2'),
    nameNumber: new FormControl('5')
  });


}
