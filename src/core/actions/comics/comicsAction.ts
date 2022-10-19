export const GET_COMICS = "GET_COMICS";
export const SET_COMICS = "SET_COMICS";

export const getComics = () => ({
    type: GET_COMICS
});

export const setComics = (comics: any) => ({
    type: SET_COMICS,
    comics
});