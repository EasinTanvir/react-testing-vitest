import React from "react";
import { describe, it, expect, vi } from "vitest";
import { screen, render, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SearchBox from "../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("Search Input", () => {
  const renderCom = () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<SearchBox onChange={onChange} />);

    return {
      textBox: screen.getByPlaceholderText("search"),
      onChange,
      user,
    };
  };

  it("fun call when press enter", async () => {
    const { onChange, textBox, user } = renderCom();

    const typeText = "easin";
    await user.type(textBox, typeText + "{enter}");

    expect(onChange).toHaveBeenCalledWith(typeText);
  });

  it("fun not call when enter is not pressed", async () => {
    const { onChange, textBox, user } = renderCom();

    const typeText = "easin";
    await user.type(textBox, typeText);

    expect(onChange).not.toHaveBeenCalled();
  });
});
