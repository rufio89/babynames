import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NamesService} from "../names.service";


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  genders = [{id: 0, gender: "Male"},{ id:1, gender:"Female"}];
  minLength: number;
  maxLength: number;
  modelOrder: number;
  nameNumber: number;
  currentGender: number = 0;
  nameData = new Array();
  nameDataNU = new Array();
  hash = new Object({});
  newNames = new Array();

  constructor(private namesService: NamesService) { }

  onChange(val){
    this.currentGender = val;
    this.callService();
  }

  callService(){
    let param: string = "";
    if(this.currentGender==0){
      param = "get_boys";
    }
    else{
      param = "get_girls";
    }
    this.namesService.search(param).subscribe( res => {
      this.nameData = res.map(x=> "_".repeat(this.modelOrder) + x.trim() + "_".repeat(this.modelOrder));
      this.nameDataNU = res.map(x=>x.trim());
      console.dir(this.nameData);
      console.dir(this.nameDataNU);
      this.generateModel(this.nameData);
      this.generateNameList();
    });
  }

  onSubmit(){
    this.callService();
  }

  generateModel(names){
    this.hash = new Object({});
    let key: string = "";
    let value: string = "";
    let tail: number = parseInt(this.modelOrder.toString());
    for(var i in names) {
      for (var j = 0; j < names[i].length - (tail+1); j++) {
        key = names[i].substring(j, j+ tail);
        value = names[i].substring(j+ tail, j + tail + 1);
        if (!(key in this.hash)) {
          this.hash[key] = [];
        }
        this.hash[key].push(value);
      }
    }
  }

  generateNameList(){
    let name: string;
    this.newNames = [];
    while(this.newNames.length < this.nameNumber){
      name = this.generateName();
      if(name.length >= this.minLength && name.length <= this.maxLength && !(this.nameDataNU.indexOf(name) > -1)){
        this.newNames.push(name);
      }
    }
  }




  generateName(): string{
    let start: string ="_".repeat(this.modelOrder);
    let next: string = "";
    let newName: string = "";
    let mOrder: number = parseInt(this.modelOrder.toString());
    while(1==1){
        next = this.hash[start][this.getRandomInt(0,this.hash[start].length-1)];
        if(next =="_") break;
        newName = newName + next;
        start = start.substring(1,mOrder) + next;
    }
    return newName;
  }

  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  myGroup: FormGroup = new FormGroup({
    minNameLength: new FormControl(),
    maxNameLength: new FormControl(),
    modelOrder: new FormControl(),
    nameNumber: new FormControl()
  });


}
