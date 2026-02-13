import React from "react";
import { LayoutDashboard, PlusSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

function UserSidebar() {
  return (
    <aside className="w-64 bg-background border-r hidden md:flex flex-col">
      <div className="p-6 text-xl font-bold">My Dashboard</div>
      <nav className="flex-1 px-4 space-y-2">
        <Button variant="ghost" className={"w-full justify-start"}>
          <Link className=" flex items-center   gap-2" href={"/dashboard"}>
            <LayoutDashboard className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </Button>
        <Button variant="ghost" className={"w-full justify-start"}>
          <Link
            className=" flex items-center   gap-2"
            href={"/dashboard/create-article"}
          >
            <PlusSquare className="h-4 w-4" />
            <span>Create Article</span>
          </Link>
        </Button>
        <Button variant="ghost" className={"w-full justify-start"}>
          <Link
            className=" flex items-center   gap-2"
            href={"/dashboard/my-articles"}
          >
            <FileText className="h-4 w-4" />
            <span>My Articles</span>
          </Link>
        </Button>
      </nav>
    </aside>
  );
}

export default UserSidebar;
