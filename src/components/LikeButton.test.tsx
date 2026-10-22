
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'

afterEach(() => {
  cleanup()
})

describe('LikeButton', () => {
  it('shows the Like label initially', () => {
    render(<LikeButton />)

    expect(
      screen.getByRole('button', { name: '♡ Like' }),
    ).toBeInTheDocument()
  })

  it('changes to Liked when clicked', async () => {
    const user = userEvent.setup()
    render(<LikeButton />)

    await user.click(screen.getByRole('button', { name: '♡ Like' }))

    expect(
      screen.getByRole('button', { name: '♥ Liked' }),
    ).toBeInTheDocument()
  })

  it('can be unliked', async () => {
    const user = userEvent.setup()
    render(<LikeButton />)

    await user.click(screen.getByRole('button', { name: '♡ Like' }))
    await user.click(screen.getByRole('button', { name: '♥ Liked' }))

    expect(
      screen.getByRole('button', { name: '♡ Like' }),
    ).toBeInTheDocument()
  })
})
