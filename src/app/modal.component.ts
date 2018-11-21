import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'modal-window',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent { 
  modalRef: BsModalRef;
  public name: string;
  public email: string;
  public comments: string;
  public result: number;
  constructor(private modalService: BsModalService, private modalServiceValidate: ModalService) {
  }
 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalServiceValidate.mixValues();
  }

  public onSubmit(): void {
    alert(this.modalServiceValidate.checkCaptcha(this.result));
  }
}