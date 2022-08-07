import {
  ActionTypes,
  createStrore,
  rootReducer,
} from './store';
import { setNextPage, setPrevPage } from './store/actions';

const container = document.getElementById('root') as HTMLElement;
const location = document.getElementById('location') as HTMLElement;
const page = document.getElementById('page') as HTMLElement;
const car = document.getElementById('car') as HTMLElement;

const store = createStrore(rootReducer, {
  page: 1,
  location: 'Garage',
});

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
    case 'btn-start': {
      car.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(1500px, 0px)' }
      ], {
        duration: 2500,
        fill: 'forwards',
      })
      break;
    }
    case 'btn-stop': {
      car.getAnimations().forEach(animation => animation.cancel());
      break;
    }
    case 'btn-brake': {
      console.log(car.getAnimations());
      car.getAnimations().forEach(animation => animation.pause());
      break;
    }
  }
})

store.subscribe((state: State) => {
  location.innerText = state.location as string;
  page.innerText = state.page as string;
});

store.subscribe(console.log);
