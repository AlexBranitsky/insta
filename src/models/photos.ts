
export type Photo = {
    IDPhoto: number, 
    IDUser: number, 
    Path:string,
};

export type Photos = Photo[];

export type Comment= {
    IdComment: number,
    IdUser: number,
    IdPhoto: number,
    Comment: string,
};

export type Comments = Comment[];

export type User = {
    ID: number,
    Name: string,
    Email: string,
}
