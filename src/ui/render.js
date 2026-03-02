

import { aside } from "./aside";
import { workspace } from "./workspace";
import { noteItem } from "./components";
import { tabItem } from "./components";


export function renderApp(state, noteServices, tabManager) {
  const root = document.getElementById("app")
  root.innerHTML = ""
  root.append(aside(), workspace())

  // list all note in aside section
  const noteList = document.getElementById('note-list')
  state.notes.forEach(note => {
    noteList.append(noteItem(note))
  });

  // tabs
  const tabSpace = document.querySelector("#tab-space")
  state.tabs.forEach(tab => {
    const note = state.notes.find(n => n.id === tab.history[tab.historyIndex])
    tabSpace.append(tabItem(note, tab.id))
  })
  attachEventTab(state, noteServices, tabManager)
}



// attach event after render updates
function attachEventTab(state, services, tabManager) {
  // Event one - create note + in new tab
  const createNoteBtn = document.querySelector("#create-note")
  createNoteBtn.addEventListener('click', () => {
    const noteId = services.createNote()
    tabManager.openNewTab(noteId)
  })

  // Event two - close tab
  const tabSpace = document.querySelector("#tab-space")
  tabSpace.addEventListener('click', (e) => {
    const closeBtn = e.target.closest(".tabClose")
    if (!closeBtn) return

    const tabId = closeBtn.dataset.tabId
    tabManager.closeTab(tabId)
  })

  // Event three - click note to open
  const listItems = document.querySelector("#note-list")
  listItems.addEventListener("click", (e) => {
    const item = e.target.closest(".note-ref-item")
    if (!item) return

    const noteId = item.dataset.id

    if (state.activeTabId === null) {
      tabManager.openNewTab(noteId)
    }
    else if(e.ctrlKey){
      tabManager.openNewTab(noteId)
    }
    else {
      tabManager.openInTab(noteId)
    }
  })


  // Event three - select tab


  // Event four - back/forward

}



// Event two
// const tabSpace = document.querySelector("#tab-space")
