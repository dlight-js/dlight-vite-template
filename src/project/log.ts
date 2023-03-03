export class Console {
    logs: any[][] = []
    errors: any[] = []

    log(...messages: any[]) {
        console.log("inner", ...messages)
        this.logs.push(messages)
    }
}