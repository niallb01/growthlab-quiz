import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Provider, createStore } from "jotai";
import IntroScreen from "../screens/IntroScreen";
import { screenAtom } from "../atoms/QuizAtoms";

describe("IntroScreen component", () => {
  it("renders the main elements and handles click", async () => {
    // 1️⃣ Create isolated store
    const store = createStore();
    store.set(screenAtom, "intro");

    // 2️⃣ Render component inside Provider
    render(
      <Provider store={store}>
        <IntroScreen />
      </Provider>
    );

    // 3️⃣ Check that some text exists (loosely, template-friendly)
    expect(screen.getByText(/growthlab/i)).toBeInTheDocument();

    // 4️⃣ Check that logo exists (use alt or data-testid)
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

    // 5️⃣ Check that button exists (role)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // 6️⃣ Simulate click and verify state changes
    await userEvent.click(button);
    expect(store.get(screenAtom)).toBe("quiz");
  });
});
