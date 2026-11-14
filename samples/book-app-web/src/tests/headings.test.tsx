import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("book heading hierarchy", () => {
  it("places book titles below the results heading", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "12 books shown", level: 2 })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "The Hobbit", level: 3 })).toBeTruthy();
  });
});
