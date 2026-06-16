const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-8 text-center mt-10">
        Contact Me
      </h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-white-900 border border-slate-700"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white-900 border border-slate-700"
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full p-3 rounded-lg bg-white-900 border border-slate-700"
        />

        <button
          className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;