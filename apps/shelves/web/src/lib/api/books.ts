import { Book } from "../../models";

export const getBooks = (): Book[] => {
    return [
        {
            title: "Book 1"
        },
        {
            title: "Book 2"
        },
        {
            title: "Book 3"
        },
        {
            title: "Book 4"
        },
    ];
}