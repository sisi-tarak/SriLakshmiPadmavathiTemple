import React from "react";

const Trust = () => {
  const events = [
    {
      id: 1,
      title: "Exploring Ancient Civilizations",
      date: "January 10, 2025",
      time: "10:00 AM - 04:00 AM",
      location: "Archaeological Museum, New York",
      description:
        "Join us for a day of exploration into the ancient civilizations of Egypt, Greece, and Rome.",
    },
    {
      id: 2,
      title: "Unearthing Prehistoric Treasures",
      date: "January 10, 2025",
      time: "10:00 AM - 04:00 AM",
      location: "Archaeological Museum, New York",
      description:
        "Join us for a day of exploration into the ancient civilizations of Egypt, Greece, and Rome.",
    },
  ];

  return (
    <div className="min-h-screen w-full text-white p-4 relative overflow-hidden">
      <div className="flex flex-col items-center my-12">
        <div className="text-sm font-semibold mb-1">TRUST</div>
        <div className="text-2xl font-bold text-yellow-600 mb-2">SLPP</div>
        <div className="w-44 flex items-center justify-center">
          <div className="h-px w-16 bg-gray-500"></div>
          <div className="mx-2 text-yellow-600">✦</div>
          <div className="h-px w-16 bg-gray-500"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-2/4">
          <div className="relative -top-32 left-[70%] transform -translate-x-1/2 w-28 h-28 border-[2px] border-dashed border-[#B5995A] rounded-full opacity-70"></div>
          <div className="relative -top-32 left-[30%] w-64 h-64 border-[2px] border-dashed border-[#7d7d7d] rounded-full opacity-50"></div>
        </div>

        <div className="w-1/2 mt-8">
          {events.map((event) => (
            <div key={event.id} className="relative mx-auto">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-[80%] mx-auto">
                <div className="w-full flex justify-center items-center border border-yellow-600/40 mt-20 py-4 px-6 rounded-lg">
                  <div className="space-y-2">
                    <div className="absolute top-10 left-[30%] text-wrap transform -translate-x-1/2 z-10">
                      <div className="bg-[#14171C] px-6 py-4 text-center">
                        <h2 className="font-montserrat text-lg font-medium whitespace-nowrap">
                          {event.title}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold">Date:</span> {event.date}
                    </div>
                    <div>
                      <span className="font-semibold">Time:</span> {event.time}
                    </div>
                    <div>
                      <span className="font-semibold">Loc:</span>{" "}
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="w-full p-5">
                  <p className="text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
