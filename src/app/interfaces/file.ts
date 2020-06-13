export enum FileType {
    Folder = 'folder',
    Terminal = 'terminal',
    Post = 'post',
}

export interface File {
    name: string;
    description: string;
    type: FileType,
    id: number,
}
