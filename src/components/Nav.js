import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

export default function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1 className='logo'>Amplified</h1>
      <button
        className='library-nav'
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        <div className='container'>
          <div>
            <div className='library-button'>
              <span>Library</span>
            </div>
            <div className='icon'>
              <FontAwesomeIcon size='3x' icon={faCompactDisc} />
            </div>
          </div>
        </div>
      </button>
    </nav>
  )
}
