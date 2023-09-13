"use client";
import styles from "../styles/todo.module.css";
import Image from "next/image";
import edit from "../assets/icons8_edit_30px_1.png";
import del from "../assets/icons8_trash_can_30px.png";
import EditeTodo from "./EditeTodo";
import AjoutTodo from "./AjoutTodo";
import { useState } from "react";
export default function Todo() {
  const [etatEdit, setEtatEdit] = useState(false);
  const [ajoutTodo, setAjoutTodo] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.titre}>
        <h3>To do List App</h3>
      </div>
      <div className={styles.add}>
        <button onClick={() => setAjoutTodo(true)}>+ Task </button>
      </div>
      <div className={styles.todolist}>
        <div className={styles.head}>
          <span>#</span>
          <span>Task Name</span>
          <span>Status</span>
          <span>Edit</span>
          <span>Remove</span>
        </div>
        <div className={styles.listes}>
          <span>220</span>
          <span>Send a Email</span>
          <span className={styles.progress}>Finish</span>
          <span className={styles.btn}>
            <div className={styles.edit} onClick={() => setEtatEdit(true)}>
              <Image src={edit} alt="" className={styles.img} />
            </div>
          </span>
          <span className={styles.btn}>
            <div className={styles.delete}>
              <Image src={del} alt="" className={styles.img} />
            </div>
          </span>
        </div>

        <div className={styles.listes}>
          <span>220</span>
          <span>Write blog post</span>
          <span className={styles.progress}>Finish</span>
          <span className={styles.btn}>
            <div className={styles.edit}>
              <Image src={edit} alt="" className={styles.img} />
            </div>
          </span>
          <span className={styles.btn}>
            <div className={styles.delete}>
              <Image src={del} alt="" className={styles.img} />
            </div>
          </span>
        </div>
      </div>
      {etatEdit && <EditeTodo setEtatEdit={setEtatEdit} />}
      {ajoutTodo && <AjoutTodo setAjoutTodo={setAjoutTodo} />}
    </div>
  );
}
