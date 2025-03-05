import { call, put } from "redux-saga/effects";
import { ComicViewModel } from "../../../models/comic.model";
import { setComics } from "../../actions/comics/comicsAction";
import { ResponseGenerator } from "../../interfaces/response";
import { requestGetComics } from "./comicRequest";

export function* handleGetComics(action: any) {
  try{
       const response: ResponseGenerator = yield call(requestGetComics);
       const { data } = response;
        let comicList: ComicViewModel[] = [];
        comicList = data.map((item: any) =>{
            return{
                ...data,
                id: item.id,
                title: item.title,
                cover: item.cover,
                description: item.description,
                editor: item.editor,
                writer: item.writer,
                penciller: item.penciller,
            }
        })
     yield put(setComics(comicList));
  }
  catch(e){
     console.log(e)
  }
}