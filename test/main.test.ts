import { describe, expect, it } from "vitest";

describe("group", () => {
  it("should", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);

    expect(data).toHaveLength(2);
  });
});
