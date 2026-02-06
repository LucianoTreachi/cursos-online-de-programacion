"use client";

import { useRouter } from "next/navigation";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import styles from "./GoBackButton.module.css";

export default function GoBackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <ArrowLeftIcon />
      Volver
    </button>
  );
}
