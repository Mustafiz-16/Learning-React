
import { useState } from "react";

function App() {
  let [age, setAge] = useState("");
  let [CandidateA, setCandidateA] = useState(0);
  let [CandidateB, setCandidateB] = useState(0);
  let [submitted, setSubmitted] = useState(false);
  const isEligible = Number(age) >= 18;


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-amber-950 mb-6">
          Voting App
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Enter Your Age:</label>
            <input
              type="text"
              value={age}
              onInput={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Type your age here"
            />
          </div>
          <button
            onClick={() => setSubmitted(true)}
            className="bg-amber-950 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition"
          >
            Submit
          </button>
        </div>
        <p className="mt-4 text-center text-lg text-gray-800">
          {!submitted
            ? "Please enter your age and submit."
            : (age === ""
              ? "Please enter your age."
              : (!isEligible
                ? "Sorry, you are not eligible to vote."
                : "Welcome! You are eligible to vote."))}
        </p>
        {submitted && isEligible ? (
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setCandidateA((prev) => prev + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Vote For Awami League
            </button>
            <button
              onClick={() => setCandidateB((prev) => prev + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Vote For Jatiya Party
            </button>
          </div>) : null
        }

        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-gray-800 mb-2">Results:</p>
          <p className="text-gray-700">Candidate A: {CandidateA} votes</p>
          <p className="text-gray-700">Candidate B: {CandidateB} votes</p>
        </div>
      </div>
    </div>
  );
}

export default App;


//npm run dev





