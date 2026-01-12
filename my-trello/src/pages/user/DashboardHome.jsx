import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import BoardList from "@/components/board/BoardList";
import BoardModel from "@/components/board/BoardModel";
import List from "@/components/list/List";

function DashboardHome() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <>
      <BoardModel isOpen={modelOpen} setIsOpen={setModelOpen} />
      <div className="h-screen flex flex-col bg-background">
        {/* Navbar */}
        <Navbar />

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64   border-r bg-background">
            <BoardList setModelOpen={setModelOpen} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="text-muted-foreground text-sm">
              <List />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
