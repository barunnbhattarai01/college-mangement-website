import { Link } from "react-router-dom";

function About() {
  const data = [
    { label: "Graduates", value: "25000+", icon: "🎓" },
    { label: "studying", value: "1500+", icon: "📚" },
    { label: "scholarship", value: "500+", icon: "🏅" }
  ];

  return (
    <>
      <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-xl mb-6">"Where Every Event Becomes a Celebration."</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-100 transition">
            <Link to="/images">Images Gallery</Link>
          </button>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-10">About This Website</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p>
                This platform is your one-stop solution for organizing unforgettable events. Whether it's a wedding, corporate meetup, birthday bash, or any special occasion — we bring your vision to life with precision and creativity.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p>
                With easy booking, real-time updates, and a dedicated team behind the scenes, we make event planning stress-free and seamless. Welcome to a space where ideas turn into experiences.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p>
                We’re not just planners — we’re experience creators. This website is built to connect you with world-class event management services at your fingertips.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Box */}
      <div className="border border-gray-300 dark:border-gray-600 shadow-lg rounded-xl w-auto p-8 bg-white dark:bg-gray-800 ml-auto mr-auto transition-colors duration-300">
        <div className="font-bold text-4xl text-gray-800 dark:text-white mb-6 text-center">Stats</div>

        <div className="space-y-4 text-2xl text-gray-700 dark:text-gray-200">
          {data.map((item, index) => (
            <p key={index}>
              <span className="text-amber-500 font-semibold">{item.icon}</span>{' '}
              {item.label}: <span className="text-amber-500 font-semibold">{item.value}</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
