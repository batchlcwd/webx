import React, { useState } from "react";
import axios from "axios";
import { createPost, getPosts } from "../services/post-service";
function FetchEx() {
  const [post, setPosts] = useState([]);

  const fetchPosts = async () => {
    console.log("fetchPosts");
    //fetch api
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // try {
    //   const resposne = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //     // {
    //     //   method: "POST",
    //     //   headers: {
    //     //     Authorization: "awtgw",
    //     //     "Content-Type": "application/json",
    //     //   },
    //     // }
    //   );
    //   const data = await resposne.json();
    //   console.log(data);
    //   console.log("completed.");
    //   setPosts([...data]);
    // } catch (error) {
    //   console.log(error);
    // }

    //     try {
    //       const response = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts`
    //       );
    //       console.log(response.data);
    //       setPosts([...response.data]);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    try {
      const post1 = await getPosts();
      console.log(post1);
      alert("got created");
      setPosts([...post1]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={fetchPosts}
        className="cursor-pointer bg-slate-800 py-2 px-4 rounded-md mt-3"
      >
        Fetch Posts
      </button>
      <button className="bg-slate-800 py-2 px-4 rounded-md mt-3 ml-3">
        Get Users
      </button>
      <div className="p-4">
        <p>Post size is : {post.length}</p>
      </div>
    </div>
  );
}

export default FetchEx;
