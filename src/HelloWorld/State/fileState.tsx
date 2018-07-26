export default interface FileStore {
    content: Paragraph[];
}

export interface Paragraph {
    ID: number;
    Sentences: Sentence[];
    Content: string;
    Number: number;
    Bold: boolean;
    Italic: boolean;
    Indentation: number;
    FileId: number;
    Analytics: Analytics[];
    Structure: string;
    Table: Table[];

}
export interface Sentence {
    ID: number;
    Words: Word[];
    Analytics: Analytics[];

}
export interface Word {
    ID: number;
    Content: string;
    Analytics: Analytics[];
}
export interface Table {
    Row: Rows[];
}

export interface Rows {
    Content: string;
}

export interface Cols {
    data: string;
}
export interface Analytics {
    Key: string;
    SubKey: Analytics[];
    Link: number;
}