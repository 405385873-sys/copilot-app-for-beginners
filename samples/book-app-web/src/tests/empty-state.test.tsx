import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import App from "../App";

it("explains how to change filters when no books match", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByRole("searchbox", { name: /search/i }), "no matching book");

  const status = screen.getByRole("status");
  expect(status.textContent).toContain("No matching books found");
  expect(status.textContent).toContain("search term, genre, or reading status");
});
