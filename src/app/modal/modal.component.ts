import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalService } from '../modal.service';


interface UserData {
  login: string;
  email: string;
  text: string;
  result: number;
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent { 
  
  public modalRef: BsModalRef;

  public userData: UserData = {
    login: '',
    email: '',
    text: '',
    result: 0
  };

  constructor(private bsModalService: BsModalService, private modalService: ModalService) {
  }
 
  public openModal(template: TemplateRef<BsModalRef>) {
    this.modalRef = this.bsModalService.show(template);
    this.modalService.mixValues();
  }

  public onSubmit(): void {
    alert(JSON.stringify(this.userData));
  }
}