import React from "react";
import { useState } from "react";
import "../button.css";
import axios from "axios";

const Home = () => {
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3005/posts`
      );
      setPosts(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
          className="input"
        />
        <div class="button-container">
          <span class="mask">present all posts</span>
          <button type="submit" name="Hover">
            which mean i am 10
          </button>
        </div>
      </form>
      <div>
        {posts.map((post) => (
          <table>
            <tr>
              <th>
                <h3>{post.title}</h3>
              </th>
              <th>
                <p>{post.body}</p>
              </th>
            </tr>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Home;
