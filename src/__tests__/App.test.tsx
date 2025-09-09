import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Provider, createStore } from "jotai";
import App from "../App";
import { screenAtom } from "../atoms/QuizAtoms";

describe("App component screens", () => {
  // Helper to render App with a specific initial screen
  function renderApp(initialScreen: "intro" | "quiz" | "email" | "summary") {
    // Create a fresh Jotai store for this test
    const store = createStore();

    // Set the initial screen value
    store.set(screenAtom, initialScreen);

    // Render App with the store provided
    return render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

  it("renders IntroScreen when screenAtom is intro", () => {
    renderApp("intro");
    expect(screen.getByTestId(/intro-screen/i)).toBeInTheDocument();
  });

  it("renders QuizScreen when screenAtom is quiz", () => {
    renderApp("quiz");
    expect(screen.getByTestId(/quiz-screen/i)).toBeInTheDocument();
  });

  it("renders EmailScreen when screenAtom is email", () => {
    renderApp("email");
    expect(screen.getByTestId(/email-screen/i)).toBeInTheDocument();
  });

  it("renders ResultsScreen when screenAtom is summary", () => {
    renderApp("summary");
    expect(screen.getByTestId(/summary-screen/i)).toBeInTheDocument();
  });
});
