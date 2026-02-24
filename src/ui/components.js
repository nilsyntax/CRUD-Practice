export function noteRef(title){
   return `
      <div class="note-ref-item text-sm px-1.5 py-1 flex gap-1.5 cursor-pointer text-gray-400">
          <span class="flex items-center"><svg width="12" height="15" viewBox="0 0 17 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.72222 0V20H0V16V14V11V9V6V4V0H4.72222ZM15.1157 0C16.1564 0 17 0.89821 17 1.9908V18.0092C17 19.1087 16.157 20 15.1157 20H5.66667V0H15.1157Z"
                fill="#ADB8C2" />
            </svg>
         </span>
         <span>${title}</span>
      </div>
   `
}


export function tab(title){
   return `
   <div class="tab flex items-center min-w-0 max-w-40 h-full py-1.5 pl-2 pr-1.5 cursor-pointer bg-gray-700">
      <span class="block min-w-0 truncate text-gray-400 text-xs">${title}</span>
      <span class=""><svg class="w-4 h-4 ml-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="rgba(207,207,207,1)">
         <path
         d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
         </path>
         </svg>
      </span>
   </div>
   `
}