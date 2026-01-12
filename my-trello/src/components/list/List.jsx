import { getListsThunk } from "@/features/list/listSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../ui/spinner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
function List() {
  const { lists, loading, error } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const selectedBoard = useSelector((state) => state.board.selectedBoard);

  useEffect(() => {
    if (selectedBoard) {
      dispatch(getListsThunk(selectedBoard.$id));
    }
  }, [selectedBoard, dispatch]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center p-6">
        <Spinner />
      </div>
    );
  }

  if (!selectedBoard) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        Select a board to view its lists
      </div>
    );
  }

  return (
    <div className="h-full">
      {error && (
        <div className="mb-4 rounded-md border border-destructive/50 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Board Lists */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {lists?.rows?.length > 0 ? (
          lists.rows.map((list) => (
            <Card
              key={list.$id}
              className="w-80 shrink-0 rounded-xl bg-muted/40"
            >
              {/* List Header */}
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold uppercase tracking-wide">
                  {list.title}
                </CardTitle>
              </CardHeader>

              {/* Tasks */}
              <CardContent className="space-y-3">
                {/* Task Card */}
                <TaskCard title="Design landing page" />
                <TaskCard title="Fix login bug" />
                <TaskCard title="Prepare API docs" />

                {/* Add Task Placeholder */}
                <button className="w-full cursor-pointer rounded-md border border-dashed border-muted-foreground/30 px-3 py-2 text-xs text-muted-foreground hover:bg-muted transition">
                  + Add a Task
                </button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-muted-foreground text-sm">
            No lists found in this board
          </div>
        )}
      </div>
    </div>
  );
}

export default List;

/* ---------------------------------- */
/* Task Card Component */
/* ---------------------------------- */

function TaskCard({ title, onView, onEdit, onDelete }) {
  return (
    <div className="group relative rounded-lg border bg-background p-3 text-sm shadow-sm transition hover:shadow-md">
      {/* Title */}
      <p className="pr-8">{title}</p>

      {/* Actions */}
      <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition group-hover:opacity-100">
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7"
          onClick={onView}
        >
          <Eye className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7"
          onClick={onEdit}
        >
          <Pencil className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 text-destructive hover:text-destructive"
          onClick={onDelete}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
