import React, { useState, useEffect } from 'react';
import { db } from '../config';
import { motion } from 'framer-motion';
import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

function Event() {
  const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [events, setEvents] = useState([]);
  const [apply, setApply] = useState(null);

  const afterApply = (index) => {
    setApply(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: eventName,
      org: organizer,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'events'), data);
      setSubmittedData(data);
      fetchEvents();
      setEventName('');
      setOrganizer('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const fetchEvents = async () => {
    const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const eventsList = querySnapshot.docs.map(doc => doc.data());
    setEvents(eventsList);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 dark:bg-black text-white">
        <div className="max-w-2xl mx-auto mt-20 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-2xl border border-amber-300">
          <h2 className="text-4xl font-bold text-center text-amber-600 mb-8 uppercase">
            Create New Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xl font-semibold mb-2">Event Name:</label>
              <input
                type="text"
                value={eventName}
                required
                className="w-full border-2 border-gray-300 rounded-xl px-4 py-2 text-lg"
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-2">Event Organizer:</label>
              <input
                type="text"
                value={organizer}
                required
                className="w-full border-2 border-gray-300 rounded-xl px-4 py-2 text-lg"
                onChange={(e) => setOrganizer(e.target.value)}
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-2xl transition-all text-lg uppercase"
              >
                Upload
              </button>
            </div>
          </form>
        </div>

        {submittedData && (
          <motion.div
            className="mt-10 ml-4 md:ml-10 lg:ml-64 uppercase"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <h3 className="text-3xl font-extrabold mb-3">Last Submitted Event</h3>
            <p className="text-xl">Event Name: {submittedData.name}</p>
            <p className="text-xl">Organizer: {submittedData.org}</p>
          </motion.div>
        )}

        {events.length > 0 && (
          <div className="relative mt-10 ml-4 md:ml-10 lg:ml-64">
            <h3 className="text-3xl font-extrabold mb-6 uppercase">All Events</h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-0 md:pr-10">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 border border-amber-400 uppercase relative"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  <h2 className="text-2xl font-bold text-amber-600 mb-2">{event.name}</h2>
                  <p className="text-lg text-gray-700 mb-4">Organizer: {event.org}</p>
                  <button
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-xl transition-all"
                    onClick={() => afterApply(index)}
                  >
                    Registration
                  </button>

                  {apply === index && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 p-4 sm:p-6 rounded-xl z-10 shadow-2xl max-w-full md:max-w-md mx-auto">
                      <img
                        src={"/close.png"}
                        className="w-8 ml-auto cursor-pointer"
                        onClick={() => setApply(null)}
                      />
                      <span className="flex flex-col mb-4">
                        Name:
                        <input
                          type="text"
                          required
                          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </span>
                      <span className="flex flex-col mb-4">
                        Address:
                        <input
                          type="text"
                          required
                          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </span>
                      <span className="flex flex-col mb-4">
                        Phone No:
                        <input
                          type="number"
                          required
                          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </span>
                      <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer">
                        Apply
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Event;
