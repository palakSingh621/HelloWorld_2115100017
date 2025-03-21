import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string="Palak";
  nameError: string="Error";
  
  ngOnInit():void {
    this.title ="Hello from BridgeLabz";
  }
  onClick($event){
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank");
  }
  onInput($event){
    console.log("Change Event Occurred!", $event.data);
    const nameRegex=RegExp('[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName))
    {
      this.nameError="";
      return ;
    }
    this.nameError="Name is Incorrect!";
  }
}