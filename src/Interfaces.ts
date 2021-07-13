export interface ICard {
    cardName: string;
    userName: string;
    comments: IComments[];
    description: string;
    columnName: string;
}

export interface IComments {
    userName: string;
    commentsText: string;
}