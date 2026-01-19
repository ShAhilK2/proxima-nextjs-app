"use client";

import { Id } from "../../../../convex/_generated/dataModel";
import Navbar from "./navbar";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const MIN_SIDEBAR_WIDTH = 200;
const MAX_SIDEBAR_WIDTH = 800;

const DEFAULT_SIDEBAR_WIDTH = 400;
const DEFAULT_MAIN_SIDE = 1000;

export const ProjectIdLayout = ({
  children,
  projectId,
}: {
  children: React.ReactNode;
  projectId: Id<"projects">;
}) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar projectId={projectId} />

      <div className="flex flex-1 overflow-hidden">
        <Allotment defaultSizes={[DEFAULT_SIDEBAR_WIDTH, DEFAULT_MAIN_SIDE]}>
          <Allotment.Pane
            snap
            minSize={MIN_SIDEBAR_WIDTH}
            maxSize={MAX_SIDEBAR_WIDTH}
            preferredSize={DEFAULT_SIDEBAR_WIDTH}
          >
            <div>Conversation Sidebar</div>
          </Allotment.Pane>
          <Allotment.Pane>{children}</Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
};
