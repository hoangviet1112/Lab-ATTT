import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fab-car',
  templateUrl: './fab-car.component.html',
  styleUrls: ['./fab-car.component.scss']
})
export class FabCarComponent implements OnInit {

  title = 'fabcar-project';
  mainForm = new FormGroup({
    colour: new FormControl(),
    make: new FormControl(),
    model: new FormControl(),
    owner: new FormControl(),
  })
  mockData = [{"Key":"CAR0", "Record":{"colour":"blue","make":"Toyota","model":"Prius","owner":"Tomoko"}},{"Key":"CAR1", "Record":{"colour":"red","make":"Ford","model":"Mustang","owner":"Brad"}},{"Key":"CAR2", "Record":{"colour":"green","make":"Hyundai","model":"Tucson","owner":"Jin Soo"}},{"Key":"CAR3", "Record":{"colour":"yellow","make":"Volkswagen","model":"Passat","owner":"Max"}},{"Key":"CAR4", "Record":{"colour":"black","make":"Tesla","model":"S","owner":"Adriana"}},{"Key":"CAR5", "Record":{"colour":"purple","make":"Peugeot","model":"205","owner":"Michel"}},{"Key":"CAR6", "Record":{"colour":"white","make":"Chery","model":"S22L","owner":"Aarav"}},{"Key":"CAR7", "Record":{"colour":"violet","make":"Fiat","model":"Punto","owner":"Pari"}},{"Key":"CAR8", "Record":{"colour":"indigo","make":"Tata","model":"Nano","owner":"Valeria"}},{"Key":"CAR9", "Record":{"colour":"brown","make":"Holden","model":"Barina","owner":"Shotaro"}}]
  selectedItem: any = null;
  constructor(
    public http: HttpClient,
  ) {

  }
  ngOnInit(): void {
  }

  getData() {

  }

  selectItem(item: any) {
    this.selectedItem = item;
    this.mainForm.patchValue(item.Record);
  }

  submit() {
    this.selectedItem = null;
  }

}
