import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FetchDetails from "../src/dataFetch/FetchDetails";

describe("Data List Component", () => {
  it("fetch detail", async () => {
    render(<FetchDetails id={1} />);

    const header = await screen.findByText("Leanne Graham");
    expect(header).toBeInTheDocument();
  });
});
