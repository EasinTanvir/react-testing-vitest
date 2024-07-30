import React from "react";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import CheckButton from "../src/components/CheckButton";
import userEvent from "@testing-library/user-event";

describe("Check Button Component", () => {
  it("button should disabled when the checkbox is unchecked", () => {
    render(<CheckButton />);

    const input = screen.getByRole("checkbox");
    expect(input).toBeInTheDocument();
    expect(input).not.toBeChecked();

    //const btn = screen.getByRole("button", { name: "Checked" });
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  it("button should enabled when the checkbox is checked", async () => {
    render(<CheckButton />);

    const user = userEvent.setup();
    const input = screen.getByRole("checkbox");
    await user.click(input);
    const btn = screen.getByRole("button");
    expect(btn).toBeEnabled();
  });
});
