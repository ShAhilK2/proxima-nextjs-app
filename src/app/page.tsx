"use client";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const page = () => {
  const projects = useQuery(api.projects.get);

  const createProject = useMutation(api.projects.create);

  console.log(createProject);
  console.log(projects);
  return (
    <div className="text-red-400">
      <Button
        onClick={() =>
          createProject({
            name: "Project 123",
          })
        }
      >
        Create Project
      </Button>
      {projects &&
        projects?.map((project: any, index: any) => {
          return (
            <div
              key={project._id}
              className="border rounded-2 p-2 flex flex-col"
            >
              <p className="text-white">{project.name}</p>

              <p className="text-white">Owner ID: {project.ownerId}</p>
            </div>
          );
        })}
    </div>
  );
};
export default page;
