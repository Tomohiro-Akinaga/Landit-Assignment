import React from 'react'
import RadioButton from './index'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

describe('RadioButton', () => {
  const handleChange = vi.fn()
  const value = '土地(住宅地)'

  test('ラベルと一緒にラジオボタンが正しくレンダーされること', () => {
    render(
      <RadioButton name='test' onChange={handleChange} value={value} checked={false}>
        {value}
      </RadioButton>
    )
    const radioButton = screen.getByRole('radio', { name: value })
    expect(radioButton).toBeTruthy()
  })

  test('ラジオボタンが選択されたときにhandleChange関数が呼ばれること', () => {
    render(
      <RadioButton name='test' onChange={handleChange} value={value} checked={false}>
        {value}
      </RadioButton>
    )
    const radioButton = screen.getByRole('radio', { name: value })
    fireEvent.click(radioButton)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
