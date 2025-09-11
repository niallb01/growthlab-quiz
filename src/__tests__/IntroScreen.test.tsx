import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Provider, createStore } from "jotai";
import IntroScreen from "../screens/IntroScreen";
import { screenAtom } from "../atoms/QuizAtoms";

describe("IntroScreen component", () => {
  it("renders start quiz instructions, logo, and handles click to quiz screen", async () => {
    // Create isolated store
    const store = createStore();
    store.set(screenAtom, "intro");

    // Render component inside Provider
    render(
      <Provider store={store}>
        <IntroScreen />
      </Provider>
    );

    // Check that logo exists (use alt or data-testid)
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

    // Check that button exists (role)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const header = screen.getByTestId(/app-header/i);
    expect(header).toBeInTheDocument();

    const text = screen.getByTestId(/quiz-text/i);
    expect(text).toBeInTheDocument();

    // Simulate click and verify state changes
    await userEvent.click(button);
    expect(store.get(screenAtom)).toBe("quiz");
  });
});
