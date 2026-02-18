import { Store } from "./core/store";
import { Service } from "./core/noteService";
import { appLayout } from "./ui/layout";

const store = new Store();
// store._save()

const services = new Service(store)



document.addEventListener("DOMContentLoaded", () => {
   
   const appRoot = document.getElementById('app')
   appLayout(appRoot)
   
})
// console.log(appRoot);
