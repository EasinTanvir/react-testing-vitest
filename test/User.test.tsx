import React from "react";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import UserList from "../src/components/UserList";

let data = [
  {
    id: 1,
    name: "Easin",
    isAdmin: false,
  },
  {
    id: 2,
    name: "Tanvir",
    isAdmin: true,
  },
];

describe("UserList Component", () => {
  it("should print an error message", () => {
    render(<UserList user={[]} />);

    let errMessage = screen.getByText(/No User Found/i);

    expect(errMessage).toBeInTheDocument();
  });

  it("should print an error message", () => {
    render(<UserList user={data} />);

    data.forEach((item) => {
      let linkTag = screen.queryByRole("link", {
        name: item.name,
      });
      expect(linkTag).toBeInTheDocument();
      expect(linkTag).toHaveAttribute("href", `/user/${item.id}`);
    });
  });
});
