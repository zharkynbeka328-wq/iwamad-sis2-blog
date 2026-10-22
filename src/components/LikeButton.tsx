
import { useState } from 'react'

export default function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <button
      className={`like-button ${liked ? 'liked' : ''}`}
      aria-pressed={liked}
      onClick={() => setLiked((current) => !current)}
    >
      {liked ? '♥ Liked' : '♡ Like'}
    </button>
  )
}
