import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "../App";

/* describe("Page: Jobs", () => {
  it("renders h1", () => {
    render(<Jobs />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
}); */

describe("Page: Jobs", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/jobs"],
    });

    render(<RouterProvider router={router} />);
  });

  it("renders h1 and job listings", async () => {
    const heading = await screen.findByRole("heading", { level: 1 });

    const jobHeadings = await screen.findAllByText(/Test Title/i);

    expect(heading).toBeInTheDocument();
    expect(jobHeadings).toHaveLength(3);
  });
});
