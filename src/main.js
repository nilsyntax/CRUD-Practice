import { Store } from "./core/store";
import { Service } from "./core/noteService";

// ui import
import { appLayout } from "./ui/layout";



const store = new Store();


const services = new Service(store)



document.addEventListener("DOMContentLoaded", () => {
   
   const appRoot = document.getElementById('app')
   appLayout(appRoot)
   
})



// console.log(appRoot);
