export interface ComicViewModel {
    id: number;
    title: string;
    img: string;      
    description: string;
    cover: string;        
    editor: string;
    writer: string;       // Comma-separated list of writers
    penciller: string;    // Comma-separated list of pencillers
}