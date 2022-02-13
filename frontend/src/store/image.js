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
    case GET_ALL_IMAGES: {
      const newState = {...state};
      const images = [];
      action.images.forEach(image => images.push(image));
      newState.listOfImages = images;
      return newState;
    }
// todo ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default imageReducer;