
import { useState } from 'react'

type Post = {
  id: number
  title: string
  category: string
  excerpt: string
  date: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Learning to Build for the Web',
    category: 'Technology',
    excerpt: 'My journey into React, TypeScript, and creating useful digital experiences.',
    date: 'October 20, 2026',
  },
  {
    id: 2,
    title: 'Small Steps, Big Progress',
    category: 'Personal growth',
    excerpt: 'Why consistent practice matters more than waiting for the perfect moment.',
    date: 'October 18, 2026',
  },
  {
    id: 3,
    title: 'Finding Inspiration in Everyday Life',
    category: 'Lifestyle',
    excerpt: 'A few thoughts on creativity, curiosity, and noticing the little things.',
    date: 'October 15, 2026',
  },
]

export default function Posts() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  function toggleLike(id: number) {
    setLikedPosts((current) =>
      current.includes(id)
        ? current.filter((postId) => postId !== id)
        : [...current, id],
    )
  }

  return (
    <section className="page-section">
      <p className="eyebrow">THE JOURNAL</p>
      <h1 className="page-title">Latest posts</h1>
      <p className="section-description">
        Thoughts and stories about technology, growth, and life.
      </p>

      <div className="posts-grid">
        {posts.map((post) => {
          const isLiked = likedPosts.includes(post.id)

          return (
            <article className="post-card" key={post.id}>
              <span className="post-category">{post.category}</span>
              <p className="post-date">{post.date}</p>
              <h2>{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>

              <button
                className={`like-button ${isLiked ? 'liked' : ''}`}
                onClick={() => toggleLike(post.id)}
                aria-pressed={isLiked}
              >
                {isLiked ? '♥ Liked' : '♡ Like'}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
