import styles from "./Title.module.css";
import { fetchDefaultUser } from "@/api/fetchUser";

const Title = async () => {
  const user = await fetchDefaultUser();

  return (
    <h1 className={styles.title}>
      Welcome Back, {user?.name ?? "Default User"}!
    </h1>
  );
};

export default Title;
