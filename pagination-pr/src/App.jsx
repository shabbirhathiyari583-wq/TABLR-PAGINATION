import { useState } from "react";
import "./style.css";

function App() {

  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    { rollNo: 1, name: "Aarav Patel", react: 78, dbms: 82, javascript: 75 },
    { rollNo: 2, name: "Vivaan Shah", react: 85, dbms: 76, javascript: 88 },
    { rollNo: 3, name: "Aditya Mehta", react: 72, dbms: 90, javascript: 81 },
    { rollNo: 4, name: "Krish Patel", react: 91, dbms: 84, javascript: 79 },
    { rollNo: 5, name: "Rohan Shah", react: 68, dbms: 73, javascript: 80 },

    { rollNo: 6, name: "Dhruv Mehta", react: 88, dbms: 79, javascript: 92 },
    { rollNo: 7, name: "Yash Patel", react: 76, dbms: 85, javascript: 74 },
    { rollNo: 8, name: "Dev Shah", react: 95, dbms: 91, javascript: 89 },
    { rollNo: 9, name: "Harsh Mehta", react: 81, dbms: 78, javascript: 85 },
    { rollNo: 10, name: "Raj Patel", react: 74, dbms: 88, javascript: 77 },

    { rollNo: 11, name: "Aayush Shah", react: 83, dbms: 75, javascript: 90 },
    { rollNo: 12, name: "Parth Mehta", react: 79, dbms: 86, javascript: 82 },
    { rollNo: 13, name: "Kunal Patel", react: 92, dbms: 80, javascript: 87 },
    { rollNo: 14, name: "Manav Shah", react: 70, dbms: 72, javascript: 78 },
    { rollNo: 15, name: "Arjun Mehta", react: 86, dbms: 89, javascript: 84 },

    { rollNo: 16, name: "Meet Patel", react: 77, dbms: 81, javascript: 73 },
    { rollNo: 17, name: "Devansh Shah", react: 90, dbms: 93, javascript: 88 },
    { rollNo: 18, name: "Nirav Mehta", react: 69, dbms: 77, javascript: 71 },
    { rollNo: 19, name: "Mihir Patel", react: 84, dbms: 82, javascript: 86 },
    { rollNo: 20, name: "Tirth Shah", react: 93, dbms: 87, javascript: 91 },

    { rollNo: 21, name: "Jay Mehta", react: 75, dbms: 79, javascript: 83 },
    { rollNo: 22, name: "Parth Patel", react: 89, dbms: 85, javascript: 80 },
    { rollNo: 23, name: "Het Shah", react: 71, dbms: 74, javascript: 76 },
    { rollNo: 24, name: "Darsh Mehta", react: 96, dbms: 90, javascript: 94 },
    { rollNo: 25, name: "Dev Patel", react: 82, dbms: 88, javascript: 79 },

    { rollNo: 26, name: "Sahil Shah", react: 78, dbms: 83, javascript: 85 },
    { rollNo: 27, name: "Maulik Mehta", react: 87, dbms: 92, javascript: 89 },
    { rollNo: 28, name: "Himanshu Patel", react: 73, dbms: 70, javascript: 77 },
    { rollNo: 29, name: "Akash Shah", react: 91, dbms: 86, javascript: 93 },
    { rollNo: 30, name: "Vatsal Mehta", react: 80, dbms: 78, javascript: 81 },

    { rollNo: 31, name: "Rudra Patel", react: 85, dbms: 90, javascript: 88 },
    { rollNo: 32, name: "Smit Shah", react: 76, dbms: 82, javascript: 74 },
    { rollNo: 33, name: "Yuvraj Mehta", react: 94, dbms: 89, javascript: 92 },
    { rollNo: 34, name: "Karan Patel", react: 68, dbms: 75, javascript: 70 },
    { rollNo: 35, name: "Nakul Shah", react: 88, dbms: 84, javascript: 86 },

    { rollNo: 36, name: "Aman Mehta", react: 79, dbms: 91, javascript: 83 },
    { rollNo: 37, name: "Ritesh Patel", react: 92, dbms: 87, javascript: 90 },
    { rollNo: 38, name: "Vivek Shah", react: 74, dbms: 80, javascript: 78 },
    { rollNo: 39, name: "Sagar Mehta", react: 86, dbms: 93, javascript: 89 },
    { rollNo: 40, name: "Nishant Patel", react: 81, dbms: 77, javascript: 84 },

    { rollNo: 41, name: "Abhishek Shah", react: 90, dbms: 85, javascript: 91 },
    { rollNo: 42, name: "Ravi Mehta", react: 72, dbms: 79, javascript: 75 },
    { rollNo: 43, name: "Mohit Patel", react: 83, dbms: 88, javascript: 87 },
    { rollNo: 44, name: "Rahul Shah", react: 95, dbms: 92, javascript: 90 },
    { rollNo: 45, name: "Varun Mehta", react: 77, dbms: 73, javascript: 80 },

    { rollNo: 46, name: "Ankit Patel", react: 89, dbms: 86, javascript: 93 },
    { rollNo: 47, name: "Nayan Shah", react: 70, dbms: 78, javascript: 72 },
    { rollNo: 48, name: "Chirag Mehta", react: 84, dbms: 90, javascript: 85 },
    { rollNo: 49, name: "Jatin Patel", react: 91, dbms: 83, javascript: 88 },
    { rollNo: 50, name: "Kishan Shah", react: 80, dbms: 76, javascript: 82 },

    { rollNo: 51, name: "Ronak Mehta", react: 87, dbms: 89, javascript: 91 },
    { rollNo: 52, name: "Bhavin Patel", react: 75, dbms: 81, javascript: 79 },
    { rollNo: 53, name: "Tejas Shah", react: 93, dbms: 95, javascript: 90 },
    { rollNo: 54, name: "Jayesh Mehta", react: 69, dbms: 74, javascript: 76 },
    { rollNo: 55, name: "Hardik Patel", react: 82, dbms: 86, javascript: 88 },

    { rollNo: 56, name: "Hiren Shah", react: 90, dbms: 91, javascript: 85 },
    { rollNo: 57, name: "Soham Mehta", react: 78, dbms: 80, javascript: 83 },
    { rollNo: 58, name: "Kartik Patel", react: 85, dbms: 87, javascript: 92 },
    { rollNo: 59, name: "Manish Shah", react: 73, dbms: 77, javascript: 71 },
    { rollNo: 60, name: "Pratik Mehta", react: 88, dbms: 84, javascript: 89 },

    { rollNo: 61, name: "Siddharth Patel", react: 94, dbms: 90, javascript: 93 },
    { rollNo: 62, name: "Akshay Shah", react: 76, dbms: 79, javascript: 81 },
    { rollNo: 63, name: "Rajesh Mehta", react: 89, dbms: 85, javascript: 87 },
    { rollNo: 64, name: "Piyush Patel", react: 71, dbms: 73, javascript: 78 },
    { rollNo: 65, name: "Nikhil Shah", react: 83, dbms: 92, javascript: 86 },

    { rollNo: 66, name: "Sameer Mehta", react: 96, dbms: 94, javascript: 91 },
    { rollNo: 67, name: "Ashish Patel", react: 80, dbms: 82, javascript: 79 },
    { rollNo: 68, name: "Rakesh Shah", react: 87, dbms: 88, javascript: 90 },
    { rollNo: 69, name: "Dhiren Mehta", react: 74, dbms: 76, javascript: 73 },
    { rollNo: 70, name: "Nilesh Patel", react: 92, dbms: 89, javascript: 95 },

    { rollNo: 71, name: "Ketan Shah", react: 81, dbms: 85, javascript: 84 },
    { rollNo: 72, name: "Yash Mehta", react: 79, dbms: 72, javascript: 77 },
    { rollNo: 73, name: "Viren Patel", react: 90, dbms: 93, javascript: 88 },
    { rollNo: 74, name: "Alok Shah", react: 68, dbms: 71, javascript: 75 },
    { rollNo: 75, name: "Shrey Mehta", react: 86, dbms: 87, javascript: 91 },

    { rollNo: 76, name: "Adit Patel", react: 93, dbms: 90, javascript: 94 },
    { rollNo: 77, name: "Kush Shah", react: 77, dbms: 80, javascript: 82 },
    { rollNo: 78, name: "Om Mehta", react: 84, dbms: 86, javascript: 89 },
    { rollNo: 79, name: "Arnav Patel", react: 72, dbms: 78, javascript: 74 },
    { rollNo: 80, name: "Shiv Shah", react: 89, dbms: 91, javascript: 87 },

    { rollNo: 81, name: "Laksh Mehta", react: 95, dbms: 88, javascript: 92 },
    { rollNo: 82, name: "Ved Patel", react: 80, dbms: 84, javascript: 79 },
    { rollNo: 83, name: "Aryan Shah", react: 87, dbms: 90, javascript: 85 },
    { rollNo: 84, name: "Kabir Mehta", react: 73, dbms: 76, javascript: 81 },
    { rollNo: 85, name: "Ayaan Patel", react: 91, dbms: 93, javascript: 89 },

    { rollNo: 86, name: "Reyansh Shah", react: 78, dbms: 82, javascript: 80 },
    { rollNo: 87, name: "Ishaan Mehta", react: 85, dbms: 87, javascript: 90 },
    { rollNo: 88, name: "Krish Shah", react: 69, dbms: 74, javascript: 72 },
    { rollNo: 89, name: "Vihaan Patel", react: 92, dbms: 95, javascript: 94 },
    { rollNo: 90, name: "Rudransh Mehta", react: 81, dbms: 79, javascript: 86 },

    { rollNo: 91, name: "Atharv Shah", react: 88, dbms: 90, javascript: 91 },
    { rollNo: 92, name: "Darsh Patel", react: 76, dbms: 83, javascript: 78 },
    { rollNo: 93, name: "Aarush Mehta", react: 94, dbms: 92, javascript: 89 },
    { rollNo: 94, name: "Parth Shah", react: 70, dbms: 77, javascript: 75 },
    { rollNo: 95, name: "Divyesh Patel", react: 86, dbms: 85, javascript: 93 },

    { rollNo: 96, name: "Jeet Mehta", react: 90, dbms: 88, javascript: 91 },
    { rollNo: 97, name: "Meet Shah", react: 79, dbms: 81, javascript: 84 },
    { rollNo: 98, name: "Avi Patel", react: 83, dbms: 89, javascript: 87 },
    { rollNo: 99, name: "Dhruv Shah", react: 97, dbms: 94, javascript: 96 },
    { rollNo: 100, name: "Moksh Mehta", react: 82, dbms: 86, javascript: 90 }
  ];
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

              <tr key={student.rollNo}>

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


        {/* Right Side - Page */}

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
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;