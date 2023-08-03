import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeleteCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeleteCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3004/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses(); //db.json dosyasındaki verileri api ile çektik
  }, []); //sadece sayfa yüklendiğinde bir kere veriler çağırılması için [] array işaraeti konulur
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : courses.length === 0 ? (
        <div className="reflesh">
          <h2 className="cardDeleteBtn">Kursların hepsini sildiniz!!!</h2>
          <button
            className="cardDeleteBtn"
            onClick={() => {
              fetchCourses();
            }}
          >
            Yenile
          </button>
        </div>
      ) : (
        <Courses courses={courses} removeCourse={deleteCourse} />
      )}
    </div>
  );
}

export default App;
