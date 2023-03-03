import { Project } from "../project/project";
import { post } from "./fetch";
import { TranspilerProjectDto } from "./input.dto";
import { ProjectOutputDto } from "./output.dto";

const port = 26668


export async function runProjectAndGetDLightPreview(body: TranspilerProjectDto, containerDocument: Document) {
    const modules: ProjectOutputDto = await post(`https://${port}.iandx.life:9443/transpile/project`, body)
    if (!modules || modules.length === 0) return []
    if (!containerDocument) return

    const project = new Project("/index.tsd", "tsd", containerDocument)
    for (let module of modules) {
        project.addModule(module.path, module.body)
    }

    await project.run()

    return modules
}