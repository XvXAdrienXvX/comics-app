import React from "react";
import { Fragment, ReactNode } from "react";
import { ComicViewModel } from "../../../models/comic.model";
import { GrAddCircle } from 'react-icons/gr';
import Button from "../../../components/customButton.component";

type Props = {
  comic: ComicViewModel
};

const Card = (props: Props) => {
    return (
        <div className="flex flex-col justify-between items-center border-solid border-3 border-grey-100 text-sm bg-gray-200 rounded-md p-5">
            <div className="p-10 bg-cover">
                <img
                    src={`${props.comic.img}`}
                />
            </div>
            <div>
                <h2 className="overflow-ellipsis">{props.comic.title}</h2>
                <div className="flex flex-row items-end">
                   <Button icon={<GrAddCircle />} />                 
                </div>
            </div>
        </div>
    );
};

export default Card;
