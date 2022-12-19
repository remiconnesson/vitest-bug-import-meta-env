import { it, expect } from "vitest"

it("should read the env var", () => {
  console.log(import.meta.env.VITE_API)
  // it should read at least one env file but it doesn't
  expect(import.meta.env.VITE_API).toMatch(/env/)
})
