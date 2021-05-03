const RECIPESITEM_SUCCESS = 'recipesITEM/success';
const FAVORITE_SET_SUCCESS = 'favorite/set/success';
const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RECIPESITEM_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case FAVORITE_SET_SUCCESS:
      return {
        ...state,
        items: state.items.id === action.payload && {
          ...state.items,
          favorite: !state.items.favorite,
        },
      };

    default:
      return state;
  }
}

export const loadRecipesItem = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3010/recipes/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: RECIPESITEM_SUCCESS,
          payload: json,
        });
      });
  };
};
