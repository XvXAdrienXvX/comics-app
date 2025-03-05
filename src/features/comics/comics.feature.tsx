import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../core/actions/comics/comicsAction";
import { RootState } from "../../core/reducers/rootReducer";
import { ComicViewModel } from "../../models/comic.model";
import CardList from "./components/cardList.component";
import Table, { Column } from "../../components/custom-table.component";

type Props = {};

const Comics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  const comics: ComicViewModel[] = useSelector(
    (state: RootState) => state.comics.comics
  );

  const columns: Column<ComicViewModel>[] = [
    { key: "id", label: "ID" },
    {
      key: "cover",
      label: "cover",
      render: (value) => (
        <img src={value as string} alt="comic" className="w-10 h-10" />
      ),
    },
    { key: "title", label: "Title" },
    { key: "writer", label: "Author" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="max-w-screen-lg w-full h-full overflow-auto bg-white p-4 rounded-lg shadow-md">
        <Table
          columns={columns}
          data={comics}
          className="w-full"
          onRowClick={(row) => {}}
        />
      </div>
    </div>
  );
};

export default Comics;
