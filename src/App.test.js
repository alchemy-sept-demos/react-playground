import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const redCircle = screen.getByText(/This is a red circle/i)
  expect(redCircle).toBeInTheDocument()
})
