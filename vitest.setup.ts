import "@testing-library/jest-dom/vitest";

// Setup for Mock Service Workers
import { afterAll, beforeAll, afterEach } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

const testJobs = [
  {
    id: 1,
    title: "Test Title",
    salary: 100,
    location: "Test Location",
  },
  {
    id: 2,
    title: "Test Title",
    salary: 100,
    location: "Test Location",
  },
  {
    id: 3,
    title: "Test Title",
    salary: 100,
    location: "Test Location",
  },
];

const restHandlers = [
  http.get("http://localhost:8000/careers", ({ request }) => {
    console.log("Handler", request.method, request.url);
    return HttpResponse.json(testJobs, { status: 200 });
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
