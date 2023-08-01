import "../App.css";
function TaskCreate() {
  return (
    <div>
      <h3>Lütfen Task Ekleyiniz!!!</h3>
      <form className="taskForm">
        <label>Başlık</label>
        <input />
        <label>Task Giriniz!!!</label>
        <textarea></textarea>
        <button>Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
