import ShopActionTypes from "./shop-types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utility";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})
export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.fetchCollectionsFailure,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionref = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionref.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
}

