
import { Link } from 'react-router'

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO MY BLOG</p>
      <h1>Ideas, stories &amp; inspiration.</h1>
      <p className="hero-description">
        A little space for thoughts, technology, creativity, and everyday discoveries.
      </p>
      <Link className="primary-button" to="/posts">
        Explore posts →
      </Link>
    </section>
  )
}
