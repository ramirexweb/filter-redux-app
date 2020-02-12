import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');

todo2.completado = true;


const estadoInicial: Todo[] = [ todo1, todo2];

export function todoReducer( state = estadoInicial, action: fromTodo.Acciones): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [ ...state, todo ];
    case fromTodo.TOGGLE_TODO:
      return state.map( todoEdit => {
        if ( todoEdit.id === action.id ) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });
    default:
      return state;
  }
}
