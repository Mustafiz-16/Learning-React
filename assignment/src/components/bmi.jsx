

import { useRef, useState } from "react";

const BMICalculate = () => {

    const weightRef = useRef();

    const heightRef = useRef();

    const [bmi, setBmi] = useState();
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const weight = parseFloat(weightRef.current.value);
        const height = parseFloat(heightRef.current.value);

        if (!weight || !height) {
            alert("Please enter valid weight and height!");
            return;
        }

        const bmiValue = weight / (height * height);


        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5) {
            setCategory("Underweight");
        }
        else if (bmiValue < 24.9) {
            setCategory("Healthy weight");
        }
        else if (bmiValue < 29.9) {
            setCategory("Overweight");
        }
        else {
            setCategory("Obesity");
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>BMI Calculator</h2>

                <input
                    type="number"
                    // step="0.01"
                    // step="any"
                    placeholder="Weight (kg)"
                    ref={weightRef} />

                <input
                    type="number"
                    placeholder="Height (m)"
                    // step="0.01"
                    step="any"
                    ref={heightRef} />

                <button type="submit">Calculate BMI</button>
            </form>

            {bmi ? <p>Your BMI: {bmi} ({category})</p> : null}
        </div>
    );
};

export default BMICalculate;




