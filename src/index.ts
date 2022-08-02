import {
  ActionTypes,
  createStrore,
  rootReducer,
} from './store';
import { setNextPage, setPrevPage } from './store/actions';

const container = document.getElementById('root') as HTMLElement;
const location = document.getElementById('location') as HTMLElement;
const page = document.getElementById('page') as HTMLElement;

const store = createStrore(rootReducer, {
  page: 1,
  location: 'Garage',
});

window.store = store

container?.addEventListener('click', e => {
  const target = e.target as HTMLElement;
  const state = store.getState();

  switch (target.id) {
    case 'btn-garage': {
      store.dispatch({ type: ActionTypes.CHANGE_LOCATION, payload: 'Garage' })
      break;
    }
    case 'btn-winners': {
      store.dispatch({ type: ActionTypes.CHANGE_LOCATION, payload: 'Winners' })
      break;
    }
    case 'btn-prevpage': {
      store.dispatch(setPrevPage(state));
      break;
    }
    case 'btn-nextpage': {
      store.dispatch(setNextPage(state));
      break;
    }
  }
})

store.subscribe((state: State) => {
  location.innerText = state.location as string;
  page.innerText = state.page as string;
});

store.subscribe(console.log);
