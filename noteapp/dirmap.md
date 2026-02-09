/note-app
│
├── index.html
├── package.json          (optional, if using Tailwind CLI)
│
├── /src
│   ├── main.js            # app entry point (bootstraps everything)
│   │
│   ├── /core              # business logic (NO DOM)
│   │   ├── note.model.js      # createNote(), isValidNote()
│   │   ├── notes.service.js   # NotesService (state + CRUD)
│   │   └── storage.js         # load(), save(), migrations
│   │
│   ├── /ui                # DOM-only code
│   │   ├── render.js          # renderNotes(), renderEmpty()
│   │   ├── events.js          # click, input, keyboard handlers
│   │   └── templates.js       # HTML string builders
│   │
│   ├── /styles
│   │   └── input.css          # Tailwind entry (if needed)




















│   │
│   └── /utils
│       ├── debounce.js
│       └── helpers.js
│
└── /dist                   # build output (if Tailwind build)
    └── output.css
