import { takeLatest } from "redux-saga/effects";
import { GET_COMICS } from "../../actions/comics/comicsAction";
import { handleGetComics } from "./comicHandler";

export function* comicSaga() {
    yield takeLatest(GET_COMICS, handleGetComics);
}