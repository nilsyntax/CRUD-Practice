
export function tabNavigation() {
   return `
   <div id="tab-section" class="bg-gray-800 flex items-center w-full h-8">
      <div class="flex items-center h-full">
         <span id="backward" class="cursor-pointer h-full w-full px-0.5"><svg class="w-4 h-full fill-gray-400"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(173,184,194,1)">
              <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
            </svg>
         </span>
         <span id="forward" class="cursor-pointer h-full w-full px-0.5"><svg class="w-4 h-full fill-gray-400"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(173,184,194,1)">
              <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
            </svg>
         </span>
      </div>

      <div id="tab-space" class="flex flex-1 min-w-0 h-full"></div>
   </div>
   `
}