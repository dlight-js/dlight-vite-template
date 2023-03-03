import { render } from "@dlightjs/dlight"
import { object, required } from "@dlightjs/useless";
// @ts-expect-error
import { App } from "./App.tsd"
import { loadMonacoWorker } from "./playground/editor/loader"
import { TranspilerProjectDto } from "./service/input.dto";
loadMonacoWorker()


render("app", App)





