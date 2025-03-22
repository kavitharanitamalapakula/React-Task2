import { studentAttendance } from "./data/studentData.js"
import { cards } from "./data/Cards.js"
import "./App.css"
export function Table() {
  return <table cellPadding={2} cellSpacing={9} style={{ textAlign: "center" }} border={1} >
    <caption><h2>Task-1</h2></caption>
    <thead>
      <tr>
        <th>S/NO</th>
        <th>Name</th>
        <th>RollNumber</th>
        <th>Date</th>
        <th>Present/Absent</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {studentAttendance.map(student => {
        return <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.rollNumber}</td>
          <td>{student.date}</td>
          <td>{student.status}</td>
          <td>
            <button style={{ margin: "4px" }}>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      })}
    </tbody>
  </table>
}

export function Cards() {
  return (<>
    <h2>Task-2</h2>
    <div className="mainCard">
      {cards.map((card) => (
        <div key={card.id} className="container">
          <div className="cardContainer">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="cardText">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
          <div>
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <button>{card.buttonText}</button>
            </a>
          </div>
        </div>
      ))}

    </div>
  </>
  );
}
