import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Button from './index'

describe('Button', () => {
  test('データダウンロードボタンが正しくレンダーされること', () => {
    render(<Button type='submit'>データをダウンロード</Button>)
    const button = screen.getByRole('button', { name: /データをダウンロード/i })
    expect(button).toBeTruthy()
  })

  test('フォームがsubmitされたときにhandleSubmit関数が呼ばれること', async () => {
    const handleSubmit = vi.fn()

    render(
      <form onSubmit={handleSubmit}>
        <Button type='submit'>データをダウンロード</Button>
      </form>
    )
    const button = screen.getByRole('button', { name: /データをダウンロード/i })

    fireEvent.submit(button)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
