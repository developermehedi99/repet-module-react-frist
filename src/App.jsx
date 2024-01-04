import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  const [timespan, setTimespan] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleTime = (time, id) =>{
    const newTimes = timespan + time;
    setTimespan(newTimes)
    const remaningBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaningBookmark);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='flex gap-6'>
        <Blogs handleBookmarks={handleBookmarks}
        handleTime={handleTime}></Blogs>
        <Bookmark bookmarks={bookmarks}
        timespan={timespan}
        ></Bookmark>
      </div>
    </div>
  )
}


export default App
