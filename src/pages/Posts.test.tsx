
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Posts from './Posts'

describe('Posts page', () => {
  it('renders the blog post titles', () => {
    render(<Posts />)

    expect(
      screen.getByRole('heading', { name: 'Latest posts' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Learning to Build for the Web' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Small Steps, Big Progress' }),
    ).toBeInTheDocument()
  })
})
