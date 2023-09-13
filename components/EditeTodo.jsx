import styles from "../styles/EditeTodo.module.css";
export default function EditeTodo({ setEtatEdit }) {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.contenu}>
          <div className={styles.centrer}>
            <div className={styles.close} onClick={() => setEtatEdit(false)}>
              <h3>X</h3>
            </div>
          </div>
          <h3>Edit Todo List </h3>
          <label for="id">Id</label>
          <input type="text" id="id" />

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
