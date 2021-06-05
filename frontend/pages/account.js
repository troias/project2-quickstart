import Head from "next/head";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import PostContext from "../context/PostsContext";
import Post from "../components/Post";
import AuthContext from "../context/AuthContext";

const Account = () => {
  const { user, logOutUser, checkIsLoggedIn } = useContext(AuthContext);

  const [loggedIn] = useState(checkIsLoggedIn());
  let account;

  if (loggedIn && user ) {
    account = (
      <div>
        <h3>User Details</h3>
        <h4>Username: {user.user.username} </h4>
        {user.user.posts.map((post) => (
          <div key={post.id}>
            <Post posts={post} />
          </div>
        ))}
      </div>
    );
  } else if (!loggedIn) {
    account =  (
      <div>
        <Link href="/login">
          Please <button> login </button> or register{" "}
        </Link>
        <Link href="/">
          <a>Go back</a>
        </Link>{" "}
      </div>
    );
  }

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

        {account}

        <a href="#">
          <button onClick={logOutUser}>Log out</button>
        </a>
      </div>
    </div>
  );
};

export default Account;
