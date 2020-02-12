import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.todo);

    this.checkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required);
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 2);
  }

  terminarEdicion() {
    this.editando = false;
  }

}
