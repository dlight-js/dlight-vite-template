export interface TranspilerSingleFileDto {
    code: string
    language: "jsx" | "jsd"
}


export interface TranspilerModule {
    path: string
    body: string
}

export interface TranspilerProjectDto {
    project: TranspilerModule[]
    language: "jsx" | "jsd"
}

