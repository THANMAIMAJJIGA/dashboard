import React, { useState } from "react";
import "./Events.css"
const Events = () => {
    const [events, setEvents] = useState([]);

    // Function to add a new event
    const addEvent = (eventData) => {
        setEvents([...events, eventData]);
    };

    return (
        <div>
            <h2>User events</h2>
            {/* Add a form for users to input event details */}
            <form onSubmit={(e) => {
                e.preventDefault();
                // Extract the form data and call addEvent to add it to the list
                const formData = new FormData(e.target);
                addEvent({
                    name: formData.get("name"),
                    amount: formData.get("amount"),
                    date: formData.get("date"),
                    paid: formData.get("paid") === "on",
                });
                // Clear the form inputs
                e.target.reset();
            }}>
                <input type="text" name="name" placeholder="Event Name" />
                <input type="number" name="amount" placeholder="Amount" />
                <input type="date" name="date" />
                <label>
                    Paid
                    <input type="checkbox" name="paid" />
                </label>
                <button type="submit">Add</button>
            </form>

            {/* Display the list of user events */}
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {/* You can use font icons here */}
                        {event.name} - ₹{event.amount} - {event.date} - {event.paid ? "Paid" : "Not Paid"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
