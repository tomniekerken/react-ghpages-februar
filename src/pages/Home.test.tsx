import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "../App";
import userEvent from "@testing-library/user-event";

describe("Page: Home", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
  });

  it("renders h1, p and a tag", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    const paragraph = screen.getByText(/take a look/i);
    const link = screen.getByRole("link", { name: /our jobs/i });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it("navigates to jobs", async () => {
    const user = userEvent.setup();

    const link = screen.getByRole("link", { name: /our jobs/i });

    await user.click(link);

    const heading = await screen.findByRole("heading", {
      level: 1,
      name: /our jobs/i,
    });

    const jobHeadings = await screen.findAllByText(/Test Title/i);

    expect(heading).toBeInTheDocument();
    expect(jobHeadings).toHaveLength(3);
  });
});
