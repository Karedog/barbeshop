"use client"
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import SectionBanner from "@/components/SectionBanner/SectionBanner";
import SectionInfo from "@/components/SectionInfo/SectionInfo";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main>
        <SectionBanner/>
        <SectionInfo/>
      </main>
    </div>
  );
}
