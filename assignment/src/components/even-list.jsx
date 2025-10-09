import { useState } from "react"


const EventList = () => {


    const [input, setInput] = useState({
        title: "",
        description: "",
        datetime: "",
        location: "",

    });

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.title || !input.datetime) return;

        const newEvents = [...events, input].sort(
            (a, b) => new Date(b.datetime) - new Date(a.datetime)
        );

        setEvents(newEvents);
        setInput({ title: "", description: "", datetime: "", location: "" });
    };

    const filteredEvents = events.filter(
        (ev) =>
            ev.title.toLowerCase().includes(search.toLowerCase()) ||
            ev.description.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Event Listing</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 rounded-xl shadow-md mb-6"
                >
                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={input.title}
                            onChange={handleChange}
                            className="border px-3 py-2 rounded"
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={input.description}
                            onChange={handleChange}
                            className="border px-3 py-2 rounded"
                        />
                        <input
                            type="datetime-local"
                            name="datetime"
                            value={input.datetime}
                            onChange={handleChange}
                            className="border px-3 py-2 rounded"
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={input.location}
                            onChange={handleChange}
                            className="border px-3 py-2 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Add Event
                    </button>
                </form>
                <input
                    type="text"
                    placeholder="Search by title or description..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded"
                />
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-3 py-2">Title</th>
                            <th className="border px-3 py-2">Description</th>
                            <th className="border px-3 py-2">Date & Time</th>
                            <th className="border px-3 py-2">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEvents.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center text-gray-500 py-3 italic"
                                >
                                    No events found
                                </td>
                            </tr>
                        ) : (
                            filteredEvents.map((ev, i) => (
                                <tr key={i}>
                                    <td className="border px-3 py-2">{ev.title}</td>
                                    <td className="border px-3 py-2">{ev.description}</td>
                                    <td className="border px-3 py-2">{ev.datetime}</td>
                                    <td className="border px-3 py-2">{ev.location}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>


            </div>


        </>
    )
}

export default EventList;


