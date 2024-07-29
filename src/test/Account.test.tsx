import React from "react";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Account from "../components/Account";

describe("Account Component", () => {
  it("should print a button", () => {
    let accountData = {
      name: "Easin",
      isAdmin: true,
    };

    render(<Account user={accountData} />);

    let button = screen.getByRole("button");
    let name = screen.getByText(/easin/i);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
    expect(name).toBeInTheDocument();
  });

  it("should not print a button", () => {
    let accountData = {
      name: "Easin",
      isAdmin: false,
    };

    render(<Account user={accountData} />);

    let button = screen.queryByRole("button");
    let name = screen.getByText(/easin/i);

    expect(button).not.toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
