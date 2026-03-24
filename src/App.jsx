import { useState, useEffect } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [full, setFull] = useState("");
  const [show, setShow] = useState(false);

  const fullName = () => {
    if (first && second) {
      setFull(first + " " + second);
      setShow(true);
    }
  };

  // Auto close after 3 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      <div className="container">
        <h1 className="tv-heading">
          <span>Name Creation</span>
        </h1>

        <label>First Name:</label>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />

        <label>Second Name:</label>
        <input
          type="text"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />

        <button onClick={fullName}>Create Full Name</button>
      </div>

      {/* POPUP */}
      {show && (
        <div className="overlay" onClick={() => setShow(false)}>
          <div className="card" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShow(false)}>
              ×
            </span>

            <h2>Your Full Name</h2>
            <p>{full}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
