import { describe, expect, test, vi } from "vitest";
import { StartButton } from "./StartButton";
import { render, screen } from "@testing-library/react"

const handleOnClick = vi.fn

describe("StartButton component", () => {
    test("Render Component Successfully start button", () => {
        render(
            <StartButton 
                isActive={false}
                handleOnClick={handleOnClick}
            />
        )
        expect(screen.getByText("START")).toBeDefined()

    })

    test("Render Component Successfully stop button", () => {
        render(
            <StartButton 
                isActive={true}
                handleOnClick={handleOnClick}
            />
        )
        expect(screen.getByText("STOP")).toBeDefined()

    })
})