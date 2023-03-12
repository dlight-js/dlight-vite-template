import { Console } from "./log"
import { Module } from "./module"
import { Path } from "./path"

export class Project {
    modules: Module[] = []
    entryFile = "/index.js"
    console = new Console()
    currentPath: Path
    containerDocument: Document

    constructor(entryFile: string, fileExtension="js", containerDocument?: Document) {
        if (entryFile) this.entryFile = entryFile
        this.currentPath = new Path(fileExtension)
        this.currentPath.to(this.entryFile)
        this.containerDocument = containerDocument ?? document
    }

    async run() {
        try {
            await this.require(this.entryFile)
        } catch (e) {
            this.console.errors.push(e)
        }
    }

    addModule(path: string, bodyString: string) {
        try {
            this.modules.push(new Module(path, bodyString))
        } catch (e) {
            this.console.errors.push(e)
        }
    }


    async require(fileName: string) {
        if (![".", "/"].includes(fileName[0])) {
            switch (fileName) {
                case "@dlightjs/dlight":
                    return await import("@dlightjs/dlight")
                case "@dlightjs/types":
                    return await import("@dlightjs/types");
                case "@dlightjs/components":
                    return await import("@dlightjs/components");
                case "@dlightjs/decorators":
                    return await import("@dlightjs/decorators");
                case "@dlightjs/emotion":
                    return await import("@dlightjs/emotion");
                default: 
                    return
            }           
        } 
        this.currentPath.to(fileName)
        const module = this.modules.find(module => module.path === this.currentPath.path)
        if (!module) {
            throw new Error(`No module named ${this.currentPath.path}`)
        }
        if (module.moduleExports === undefined) {
            module.moduleExports = {}
            await module.body(this.require.bind(this), module.moduleExports, this.console, this.containerDocument)
        }
        return module.moduleExports
    }
}

