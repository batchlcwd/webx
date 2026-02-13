import UserSidebar from "@/components/UserSidebar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-muted/40">
      <UserSidebar />
      {children}
    </div>
  );
}
