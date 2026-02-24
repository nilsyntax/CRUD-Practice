import { tabNavigation } from "./workspace/tabigation"
import { noteSpace } from "./workspace/noteSapce"

export function workspace() {
   const container = document.createElement("div")
   container.classList.add(
      "workspace", "w-full", "overflow-hidden", "flex", "flex-col", "bg-gray-700"
   )
   container.innerHTML = `
   ${tabNavigation()}
   ${noteSpace()}
   `
   return container
}


