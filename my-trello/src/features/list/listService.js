// load the list of board

import { DB_ID, LIST_TABLE_ID } from "@/lib/appwrite";
import { tablesDb } from "@/lib/appwrite";
import { Query } from "appwrite";
export async function getLists(boardId) {
  return await tablesDb.listRows({
    databaseId: DB_ID,
    tableId: LIST_TABLE_ID,
    queries: [Query.equal("boardId", [boardId]), Query.orderDesc("$createdAt")],
  });
}
