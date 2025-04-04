import styles from "./page.module.css";
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst() 
  return (
    <div className={styles.page}>
      {user?.username ?? "No user added yet"}
      <br />
      Hello, your CD is working fine
    </div>
  );
}