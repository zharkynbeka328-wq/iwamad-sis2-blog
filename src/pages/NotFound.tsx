
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <p className="eyebrow">ERROR 404</p>
      <h1 className="page-title">This page wandered off.</h1>
      <p className="section-description">
        The page you are looking for does not exist.
      </p>
      <Link className="primary-button" to="/">
        Back to home →
      </Link>
    </section>
  )
}
