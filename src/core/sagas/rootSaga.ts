import { all, fork, takeLatest } from "redux-saga/effects";
import { comicSaga } from "./comics/comicSaga";

export function* rootSaga() {
   yield all([
     fork(comicSaga),
   ])
}