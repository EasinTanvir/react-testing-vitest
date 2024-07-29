import React from "react";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import ShowTitle from "../components/ShowTitle";

describe("Show Title Components", () => {
  it(" render the button with Show Text and hide the input", () => {
    render(<ShowTitle />);

    const textBox = screen.queryByRole("textbox");
    expect(textBox).not.toBeInTheDocument();
    const shwButton = screen.getByRole("button");
    expect(shwButton).toBeInTheDocument();
    expect(shwButton).toHaveTextContent("Show");
  });
  it("render the button with hide Text and show the input", async () => {
    render(<ShowTitle />);

    const user = userEvent.setup();
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    await user.click(btn);

    const textBox = screen.queryByRole("textbox");
    expect(textBox).toBeInTheDocument();
    expect(btn).toHaveTextContent("hide");
  });
});
