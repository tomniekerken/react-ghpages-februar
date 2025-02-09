import { useLoaderData } from "react-router";

type Job = {
  id: number;
  title: string;
  salary: number;
  location: string;
};

export const loader = async () => {
  let data: Job[] | null = null;
  let error = null;

  try {
    const response = await fetch("http://localhost:8000/careers", {
      method: "GET",
    });

    if (!response.ok) throw response;

    data = (await response.json()) as Job[];
  } catch (err) {
    console.log("error: ", err);
    error = "Failed to load jobs";
  }

  return {
    data: data,
    error: error,
  };
};

const Jobs = () => {
  const { data, error } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Our Jobs</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti odio
        similique sequi blanditiis harum, soluta quis illo suscipit distinctio?
      </p>
      {error ? <p>{error}</p> : null}
      {data
        ? data.map((job) => {
            return (
              <article key={job.id}>
                <h2>{job.title}</h2>
              </article>
            );
          })
        : null}
    </>
  );
};

export default Jobs;
