import Head from "next/head";
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Skills from "../components/skills";
import Contacts from "../components/contacts";
import Intro from "../components/intro";
import Experience from "../components/experience";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiago Fernandes</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Proza+Libre&family=Roboto+Slab&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className={styles.content}>
          <Intro />
          <Skills />
          <Experience />
        </div>
        <Contacts />
      </main>
    </div>
  );
}
