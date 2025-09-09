import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Provider, createStore } from "jotai";
import App from "../App";
import { screenAtom } from "../atoms/QuizAtoms";

describe("App component screens", () => {
  it("renders IntroScreen when screenAtom is intro", () => {
    const store = createStore();
    store.set(screenAtom, "intro");

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId(/intro-screen/i)).toBeInTheDocument();
  });

  it("renders QuizScreen when screenAtom is quiz", () => {
    const store = createStore();
    store.set(screenAtom, "quiz");

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId(/quiz-screen/i)).toBeInTheDocument();
  });

  it("renders EmailScreen when screenAtom is email", () => {
    const store = createStore();
    store.set(screenAtom, "email");

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId(/email-screen/i)).toBeInTheDocument();
  });

  it("renders ResultsScreen when screenAtom is summary", () => {
    const store = createStore();
    store.set(screenAtom, "summary");

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId(/summary-screen/i)).toBeInTheDocument();
  });
});
