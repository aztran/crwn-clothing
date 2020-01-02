import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../user/user.type";
import { clearCart } from "./cart.action";

export function* cleartCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, cleartCartOnSignOut);
}
export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
