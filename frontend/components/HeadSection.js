import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserTie } from "react-icons/fa";

const HeadSection = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const isHome = router.pathname === "/";
  const create = router.pathname === "/create";
  const singlePage = router.pathname === "/posts/[id]";

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className={styles.mainSection}>
      <br />

      <div className={styles.title}>
        <Link href="/">
          <a>
            <h1>Troias Blog</h1>
          </a>
        </Link>
      </div>

      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack} className={styles.backLink}>
            <h3>Back</h3>
          </a>
        </div>
      )}

  

      {user ? (
        <>
          {!create && !singlePage && (
            <Link href="/create">
              <a href="#">
                {" "}
                <h3> Create Post </h3>
              </a>
            </Link>
          )}
          <Link href="/account">
            <a>
              <FaUserTie alt={user.email} /> Account
            </a>
          </Link>
        </>
      ) : (
        <Link href="/login">
          <a>
            {" "}
            <FaUserTie /> Log in
          </a>
        </Link>
      )}
    </div>
  );
};

export default HeadSection;
