import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";

const HeadSection = () => {

    const router = useRouter();
    const isHome = router.pathname === "/";
    const create = router.pathname === "/create";

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
            {/* backLink */}
            {!isHome && (
                <div className={styles.back}>
                    <a href="#" onClick={goBack}>
                        <h3>Back</h3>
                    </a>
                </div>
            )}
            {!isHome && (
                <div className={styles.home}>
                    <a 
                    href="#" 
                    onClick={goBack}
                    className={styles.homeLink}>
                        <h3>home</h3>
                    </a>
                </div>
            )}
            {/* Create Link */}
            {!create && (
                <Link href="/create">
                    <a href="#" > <h3> Create Post </h3></a>
                </Link>
            )}

        </div>
    );
};

export default HeadSection;
