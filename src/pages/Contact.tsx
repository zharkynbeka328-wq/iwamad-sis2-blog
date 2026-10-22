
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'

type ContactProps = {
  onLogin: () => void
}

export default function Contact({ onLogin }: ContactProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (email.trim() && password.trim()) {
      onLogin()
      navigate('/private')
    }
  }

  return (
    <section className="page-section contact-section">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1 className="page-title">Let's connect.</h1>
      <p className="section-description">
        Have a question or an idea? I'd love to hear from you.
      </p>

      <div className="contact-card">
        <h2>Demo login</h2>
        <p>Enter any email and password to access the private page.</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button className="primary-button" type="submit">
            Sign in →
          </button>
        </form>

        <p><Link to="/">Back to home</Link></p>
      </div>
    </section>
  )
}
