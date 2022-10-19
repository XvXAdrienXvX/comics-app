import React from "react";
import { ComicViewModel } from "../../../models/comic.model";
import Card from "./card.component";

type Props = {
  comicList: ComicViewModel[]
};

const CardList = (props: Props) => {
    return (
        <div className="flex">
            <div className="grid grid-cols-6 gap-4">
                {props.comicList != undefined ? props.comicList.map((item: ComicViewModel, index) =>{
                    return (
                        <Card key={index} comic={item} />
                    )
                }): null}
            </div>
        </div>
    );
};

export default CardList;