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
        comicList = data.data.results.map((item: any) =>{
            return{
                ...data.data.results,
                id: item.id,
                title: item.title,
                img: `${item.images.map((img:any) => img.path)}\\portrait_xlarge.jpg`
            }
        })
     yield put(setComics(comicList));
  }
  catch(e){
     console.log(e)
  }
}