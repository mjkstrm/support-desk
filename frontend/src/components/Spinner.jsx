import React from 'react'

function Spinner() {
  return (
    <div className="flex mt-25 justify-center items-center animate-spin">
        <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-25"></span>
          <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-25"></span>
          <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-25"></span>
    </div>
  )
}

export default Spinner