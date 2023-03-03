const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

export class Module {
    path
    body
    moduleExports: undefined | object
    constructor(path: string, bodyString: string) {
        this.path = path
        this.body = Module.stringToFunc(bodyString)
    } 

    
    static stringToFunc(code: string) {
        return new AsyncFunction("require", "exports", "console", "document", code)
    }
}
