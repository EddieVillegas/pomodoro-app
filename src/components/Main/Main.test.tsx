import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import { Main } from "./Main";

describe("Main Component", () => {
    test("Render successfully 25 minutes", () => {
        render(
            <Main
                time={25 * 60}
            />
        )
        expect(screen.getByText("25:00")).toBeDefined()
    })

    test("Render successfully 5 minutes", () => {
        render(
            <Main
                time={5 * 60}
            />
        )
        expect(screen.getByText("05:00")).toBeDefined()
    })

    test("Render successfully 15 minutes", () => {
        render(
            <Main
                time={15 * 60}
            />
        )
        expect(screen.getByText("15:00")).toBeDefined()
    })
})