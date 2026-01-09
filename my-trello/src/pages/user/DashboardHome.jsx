import React from "react";
import Navbar from "@/components/common/Navbar";
import BoardList from "@/components/common/BoardList";

function DashboardHome() {
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64   border-r bg-background">
          <BoardList />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="text-muted-foreground text-sm">
            Select a board to get started
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardHome;
