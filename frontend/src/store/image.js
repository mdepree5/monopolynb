// todo ——————————————————————————————————————————————————————————————————————————————————
export const GET_ALL_IMAGES = 'image/get_all';
// todo ——————————————————————————————————————————————————————————————————————————————————

const getAllImages = (images, propertyId) => ({
  type: GET_ALL_IMAGES,
  images,
  propertyId
});

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const getImagesByPropertyId = propertyId => async (dispatch) => {
  const response = await fetch(`/api/properties/${propertyId}/images`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const images = await response.json();
    dispatch(getAllImages(images, propertyId));
    return images;
  }
  return response;
};
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfImages: [] };

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_IMAGES: {
    //   const newState = {};
    //   action.images.forEach(image => newState[image.id] = image);

    //   return {
    //     ...newState,
    //     ...state,
    //     listOfImages: action.reviews,
    //     pseudoListOfReviews: {...newState}
    //   };
    // }
    case GET_ALL_IMAGES: {
      const newState = {...state};
      console.log(action.images);
      const newImages = state.listOfImages.filter(image => action.image)
      newState.listOfImages = newImages;

      return newState;
    }
// todo ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default imageReducer;