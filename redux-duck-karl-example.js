import { Reducer } from './utils';

export const UI_FORM_TOGGLE_GRID = 'UI_FORM_TOGGLE_GRID';
export const UI_FORM_TOGGLE_THUMBNAILS = 'UI_FORM_TOGGLE_THUMBNAILS';

export const toggleGrid = () => ({ type: UI_FORM_TOGGLE_GRID });
export const toggleThumbnails = () => ({ type: UI_FORM_TOGGLE_THUMBNAILS });

const toggleForm = (state, key) => ({
  ...state,
  forms: {
    ...state.forms,
    [key]: !state.forms[key]
  }
})

export default Reducer({
  forms: {
    grid: true,
    thumbnails: true
  }
},
{
  [UI_FORM_TOGGLE_GRID]: (state = {}, action) => toggleForm(state, 'grid'),
  [UI_FORM_TOGGLE_THUMBNAILS]: (state = {}, action) => toggleForm(state, 'thumbnails')
});


export const Reducer = (initial, reducers) => (state = initial, action) => {
  return (reducers.hasOwnProperty(action.type) && reducers[action.type](state, action)) || state;
};

// see this article also
// https://github.com/erikras/ducks-modular-redux