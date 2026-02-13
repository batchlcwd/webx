import React from "react";
import { LayoutDashboard, PlusSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Dashboard() {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard Home</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">Stats / Overview</CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">Recent Posts</CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">Quick Actions</CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Dashboard;
