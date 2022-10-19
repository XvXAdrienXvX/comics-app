import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../core/actions/comics/comicsAction";
import { RootState } from "../../core/reducers/rootReducer";
import { ComicViewModel } from "../../models/comic.model";
import CardList from "./components/cardList.component";

type Props = {
 
};

const Comics = (props: Props) => {
    const dispatch = useDispatch();

    useEffect(() => { 
       dispatch(getComics())
    }, []);
      
    const comics: ComicViewModel[] = useSelector((state: RootState) => state.comics.comics);

    return (
        <div className="flex flex-row w-full">
             <div className="flex flex-row w-full">
                 <CardList comicList={comics} />
             </div>
        </div>
    );
};

export default Comics;
