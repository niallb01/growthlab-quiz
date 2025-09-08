import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Provider, createStore } from "jotai";
import IntroScreen from "../screens/IntroScreen";
import { screenAtom } from "../atoms/QuizAtoms";

describe("IntroScreen component", () => {
  it("renders the text, logo, and button and handles click", async () => {
    // 1️⃣ Create isolated store
    const store = createStore();
    store.set(screenAtom, "intro");

    // 2️⃣ Render component inside Provider
    render(
      <Provider store={store}>
        <IntroScreen />
      </Provider>
    );

    // 3️⃣ Check text
    expect(screen.getByText(/GrowthLab/i)).toBeInTheDocument();

    // 4️⃣ Check logo image by alt text
    const logo = screen.getByAltText("GrowthLab logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      expect.stringContaining("growthlab-logo")
    );

    // 5️⃣ Check button
    const button = screen.getByRole("button", { name: /Start Quiz/i });
    expect(button).toBeInTheDocument();

    // 6️⃣ Simulate button click
    await userEvent.click(button);

    // 7️⃣ Assert atom changed to "quiz"
    expect(store.get(screenAtom)).toBe("quiz");
  });
});
