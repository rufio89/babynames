import * as fs from "fs"

export class FileImport {

  constructor(){

  }

  read(genderType) {
    let fileName: string = "";
    let file:File;
    let myReader:FileReader = new FileReader();
    if(genderType==0){
      file = new File("src/assets/namesBoys.txt");
    }
    else{
      file = "src/assets/namesGirls.txt";
    }
    return myReader.readAsText()
  }

}
