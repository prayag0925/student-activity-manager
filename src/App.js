import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  const [text, setText] = useState("");

  const addActivity = () => {
    if (!text.trim()) return;

    const newActivity = {
      id: Date.now(),
      name: text,
      status: "Pending",
    };

    setActivities([...activities, newActivity]);
    setText("");
  };

  const deleteActivity = (id) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  const toggleStatus = (id) => {
    setActivities(
      activities.map((a) =>
        a.id === id
          ? { ...a, status: a.status === "Pending" ? "Completed" : "Pending" }
          : a
      )
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>
        Student Activity Manager
      </h1>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter activity..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={addActivity}
          style={{
            padding: "8px 15px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <h2 style={{ color: "#555" }}>Activities:</h2>

      {activities.length === 0 ? (
        <p style={{ color: "#999" }}>No activities yet.</p>
      ) : (
        activities.map((a) => (
          <div
            key={a.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              backgroundColor: a.status === "Completed" ? "#d4edda" : "#f8d7da",
            }}
          >
            <span>
              {a.name} — {a.status}
            </span>
            <div>
              <button
                onClick={() => toggleStatus(a.id)}
                style={{
                  marginRight: "10px",
                  padding: "5px 8px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  backgroundColor:
                    a.status === "Pending" ? "#007bff" : "#ffc107",
                  color: "#fff",
                }}
              >
                {a.status === "Pending" ? "Complete" : "Pending"}
              </button>
              <button
                onClick={() => deleteActivity(a.id)}
                style={{
                  padding: "5px 8px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;