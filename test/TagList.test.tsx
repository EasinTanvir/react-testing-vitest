import React from "react";
import { describe, it, expect, vi } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import TagList from "../src/components/TagList";
import userEvent from "@testing-library/user-event";

describe("List Tags", () => {
  it("should", async () => {
    render(<TagList />);

    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(btn);

    const text = await screen.findByText("easin");
    expect(text).toBeInTheDocument();
  });
});
