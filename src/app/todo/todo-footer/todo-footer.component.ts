import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

}
