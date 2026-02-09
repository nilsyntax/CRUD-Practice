export function noteModel(title, content) {
   const now = Date.now();

   return {
      id: crypto.randomUUID(),
      title: title,
      content: content,
      createdAt: now,
      updatedAt: now,
   }
}

// console.log(createNote("Hello", "Hello World"))