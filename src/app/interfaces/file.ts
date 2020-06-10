export enum FileType {
    Folder = 'folder',
    Terminal = 'terminal',
    Article = 'article',
}

export interface File {
    name: string;
    description: string;
    type: FileType,
    id: number,
}
