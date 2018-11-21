import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent { 
  
  public modalRef: BsModalRef;

  public userData = {
    name: '',
    email: '',
    comments: '',
    result: 0
  }

  constructor(private bsModalService: BsModalService, private modalService: ModalService) {
  }
 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.bsModalService.show(template);
    this.modalService.mixValues();
  }

  public onSubmit(): void {
    alert(this.modalService.checkCaptcha(this.userData.result));
  }
}