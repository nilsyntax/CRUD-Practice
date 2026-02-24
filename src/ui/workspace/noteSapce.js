export function noteSpace(){
   return `
      <div id="noteview" class="w-full h-full relative">
        <span class="mode absolute right-4 top-3 cursor-pointer">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
            fill="rgba(173,184,194,1)">
            <path
              d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z">
            </path>
          </svg>
        </span>
        <div id="editor" class="bg-gray-500 w-full h-full">
            
        </div>
        <div class="shortcut-hints w-full h-16 absolute bottom-0 bg-linear-to-b from-transparent to-gray-900/40">
        
        </div>
      </div>
   `
}