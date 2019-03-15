import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DAOPersons } from '../../dao/dao-persons';
import { Person } from '../person/person';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  dao:any;
  persons:Person[];
  closeResult: string;

  

  constructor(private modalService: NgbModal) {
    this.dao = new DAOPersons();
    this.persons = this.dao.getList();
    console.log(this.persons);
  }

  open(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSubmit(data:any){
    this.dao.insert(data);
    console.log(data);
  }

  onEdit(data:Person[]){
    console.log(data);
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    //console.log(this.persons);
  }

}
