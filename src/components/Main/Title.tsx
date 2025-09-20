"use client";
import { useEffect, useState } from "react";
import styles from "./Title.module.css";
import { fetchDefaultUser } from "@/api/fetchUser";

export default function Title() {
  const [name, setName] = useState("User");

  useEffect(() => {
    fetchDefaultUser().then((user) => {
      if (user?.name) setName(user.name);
    });
  }, []);

  return <h1 className={styles.title}>Welcome Back, {name}!</h1>;
}
