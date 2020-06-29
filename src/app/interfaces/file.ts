export enum FileType {
    Folder = 'folder',
    Terminal = 'terminal',
    Post = 'post',
    About = 'about',
    Resume = 'resume',
}

export interface File {
    name: string;
    description: string;
    type: FileType,
    id: number,
}
