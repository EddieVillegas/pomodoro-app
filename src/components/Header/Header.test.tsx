import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe("Header Component", () => {
    test("Render component", () => {
        const title = "title"
        render(<Header title={title}/>)
        expect(screen.findByText(title)).toBeDefined()
    })
})