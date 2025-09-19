"use client"; 
import styles from "./page.module.css";
import SphereVideo from "../components/Main/SphereVideo";
import InputArea from "../components/Main/InputArea";
import Buttons from "../components/Main/Buttons";
import Title from "../components/Main/Title";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <SphereVideo />  
      <Title />     
      <InputArea />  
      <Buttons />   
    </div>
  );
}
