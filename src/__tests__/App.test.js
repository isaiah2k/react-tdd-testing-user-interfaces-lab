import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../App"

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />)
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  })
  expect(topLevelHeading).toBeInTheDocument()
})

test("displays an image of myself with alt text", () => {
  render(<App />)
  const image = screen.getByAltText(/image of/i)
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("src")
})

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />)
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  })
  expect(aboutHeading).toBeInTheDocument()
})

test("displays a paragraph with a biography", () => {
  render(<App />)
  const paragraph = screen.getByText(/.+/, { selector: "p" })
  expect(paragraph).toBeInTheDocument()
})

test("displays a link to my GitHub page", () => {
  render(<App />)
  const githubLink = screen.getByRole("link", { name: /github/i })
  expect(githubLink).toBeInTheDocument()
  expect(githubLink).toHaveAttribute("href")
})

test("displays a link to my LinkedIn page", () => {
  render(<App />)
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i })
  expect(linkedInLink).toBeInTheDocument()
  expect(linkedInLink).toHaveAttribute("href")
})