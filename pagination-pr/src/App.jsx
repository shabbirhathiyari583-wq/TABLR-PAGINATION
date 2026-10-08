import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [students, setStudents] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const getStudents = async () => {
    const response = await fetch("http://localhost:3000/students");
    const data = await response.json();

    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const totalPages = Math.ceil(students.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  const endIndex = startIndex + pageSize;

  const currentStudents = students.slice(startIndex, endIndex);

  return (
    <div className="container">

      <h1>Students Marks List</h1>

      <div className="tableBox">

        <table>

          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>React</th>
              <th>DBMS</th>
              <th>JavaScript</th>
            </tr>
          </thead>

          <tbody>

            {currentStudents.map((student) => (

              <tr key={student.id}>

                <td>{student.rollNo}</td>

                <td>{student.name}</td>

                <td>{student.react}</td>

                <td>{student.dbms}</td>

                <td>{student.javascript}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      <div className="paginationBar">

        <div className="sortBox">

          <span>Sort:</span>

          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
          >

            <option value="5">5</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>

          </select>

        </div>


        <div className="pageBox">

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={
              currentPage === totalPages ||
              students.length === 0
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;