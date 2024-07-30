import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DataFetch from "../src/dataFetch/DataFetch";
import { server } from "./mocks/server";
import { http, HttpResponse } from "msw";
describe("Data List Component", () => {
  it("render all the data lists", async () => {
    render(<DataFetch />);

    const header = await screen.findAllByRole("heading");
    expect(header.length).toBeGreaterThan(0);
  });

  it("render 0", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json([]);
      })
    );
    render(<DataFetch />);
    const message = await screen.findByText(/No Product/i);
    expect(message).toBeInTheDocument();
  });
});
