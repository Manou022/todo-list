import styles from "../styles/AjoutTodo.module.css";
import React from "react";

export default function AjoutTodo({ setAjoutTodo }) {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.contenu}>
          <div className={styles.centrer}>
            <div className={styles.close} onClick={() => setAjoutTodo(false)}>
              <h3>X</h3>
            </div>
          </div>
          <h3>Ajout Todo List </h3>

          <label for="task">Task</label>
          <input type="text" id="task" />

          <label for="status">Status</label>
          <input type="text" id="status" />
          <div className={styles.btn}>
            <button type="submit">Valider</button>
            <button type="reset">Annuler</button>
          </div>
        </div>
      </form>
    </div>
  );
}
