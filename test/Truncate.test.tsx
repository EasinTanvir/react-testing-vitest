import React from "react";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import ShowTitle from "../src/components/ShowTitle";
import TruncateText from "../src/components/TruncateText";

describe("TruncateText Components", () => {
  it("should display the text when the length is less than 10", () => {
    render(<TruncateText text="My name" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  let myText = "My name is Easin! Who are you My name is Easin! Who are you";
  const truncatText = myText.substring(0, 15) + "...";

  it("should display the truncate text when the text length is 255", async () => {
    render(<TruncateText text={myText} />);

    const article = screen.queryByRole("article");
    expect(article).toHaveTextContent(truncatText);

    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("Show Full");
  });

  it("should display the full text when the text length is 255 and show full button will be clicked", async () => {
    render(<TruncateText text={myText} />);

    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(btn);

    const article = screen.queryByRole("article");
    expect(article).toHaveTextContent(myText);
    expect(btn).toHaveTextContent("Hide");
  });

  it("collapse the text when the button will be clicked", async () => {
    render(<TruncateText text={myText} />);

    const showMore = screen.getByRole("button", { name: "Show Full" });
    const user = userEvent.setup();
    await user.click(showMore);

    const showLess = screen.getByRole("button", { name: "Hide" });
    await user.click(showLess);
    const article = screen.queryByRole("article");
    expect(article).toHaveTextContent(truncatText);
    expect(showLess).toHaveTextContent("Show Full");
  });
});
