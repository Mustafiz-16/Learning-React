import { useState } from "react";

const Form = () => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        message: '',

    });
    const handleChange = (e) => {
        setInput(prevInput => {
            return {
                ...prevInput,
                [e.target.name]: e.target.value,
            };
        });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-2xl shadow-md w-96"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Registration Form
                    </h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={input.name}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your Age"
                        value={input.age}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <select
                        name="gender"
                        value={input.gender}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={input.email}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your Phone Number"
                        value={input.phone}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        name="address"
                        placeholder="Enter your Address"
                        value={input.address}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={input.city}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={input.state}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="zip"
                        placeholder="ZIP Code"
                        value={input.zip}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={input.country}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={input.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
                {submitted && (
                    <div className="mt-4 p-4 bg-green-200 rounded-lg">
                        <p>name: {input.name}</p>
                        <p>age: {input.age}</p>
                        <p>gender: {input.gender}</p>
                        <p>email: {input.email}</p>
                        <p>phone: {input.phone}</p>
                        <p>address: {input.address}</p>
                        <p>city: {input.city}</p>
                        <p>state: {input.state}</p>
                        <p>zip: {input.zip}</p>
                        <p>country: {input.country}</p>
                        <p>message: {input.message}</p>
                    </div>
                )}
            </div>
        </>
    );
};
export default Form;

//npm run dev