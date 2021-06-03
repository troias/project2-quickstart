import Head from "next/head";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import PostContext from "../context/PostsContext";
import AuthContext from "../context/AuthContext";

const Account = () => {
  const { user, logOutUser, getAuthUserName, checkIsLoggedIn } =
    useContext(AuthContext);
  const [loggedIn] = useState(checkIsLoggedIn());

  console.log("loggedIn", "loggedIn");
  console.log(loggedIn && user.user.username);
  return (
    <div>
      <Head>
        <title>Acount Page</title>
        <meta
          name="description"
          content="The Account Page view your orders and logout"
        />
      </Head>

      <div>
        <h2> Account Page </h2>
        {loggedIn && <div>
          {user.user.username}
          Posts: {
            user.user.posts.map(post =>
              <div key={post.id}>
              {post.id},
              {post.title},
              {post.likes},
              {post.author}
              </div>
            )}
        </div>
        }

        {/* {loggedIn && (
          <div>
            
            
          </div>
        )} */}

        {/* {!loggedIn && (
          <div>
            <Link href="/login">
              Please <button> login </button> or register{" "}
            </Link>
            <Link href="/">
              <a>Go back</a>
            </Link>{" "}
          </div>
        )
        } */}

        <a href="#">
          <button onClick={logOutUser}>Log out</button>
        </a>
      </div>
    </div>
  );
};

export default Account;
