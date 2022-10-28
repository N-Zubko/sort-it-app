const About = () => {
  return (
    <>
      <h1 className="text-center text-lg font-semibold mb-4">About</h1>
      <section className="text-center">
        <article>
          <p>
            <strong>Sort_it!</strong> is an educational waste sorting
            application aimed at teaching users on which option to choose to
            dispose of their waste.
          </p>
          <p>
            The app is based on waste sorting rules in the city of Calgary, AB,
            Canada. You can read more about them on the{' '}
            <a
              href="https://www.calgary.ca/waste/what-goes-where/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              City of Calgary website
            </a>
            .
          </p>
          <p className="mt-4">
            To play the game, click <code>Play</code> in the navigation bar and
            then select the <code>Start</code> button.
          </p>
          <p>Drag waste items to carts corresponding to their type. </p>
          <p>
            You can learn about waste on <code>Learn</code> page.
          </p>
          <p>
            Important: due to React Dnd the app will not work correctly on
            mobile devices.
          </p>
        </article>
      </section>
      <section className="text-center mt-4 mb-2">
        <h2 className="mt-2 text-base">Technologies used:</h2>
        <p>
          ReactJS, React Dnd library for drag and drop, MongoDB, GraphQL,
          Tailwind, Netlify to host the front-end, Back4app to host the back-end
          and the database.
        </p>
      </section>
      <section className="flex flex-col items-center mb-60">
        <h2 className="text-center mt-2">Developed by:</h2>
        <img
          src="https://the-collab-lab.codes/assets/img/members/Nadia-Zubko.jpeg"
          alt="Nadia Zubko, the developer"
          className="rounded-full w-36 h-36"
        />
        <h3 className="text-base">Nadia Zubko</h3>
        <p>Full Stack Web Developer</p>
        <p className="mb-2">Environment Enthusiast & Mom</p>

        <p className="mb-4">
          If you have any questions, comments, or suggestions, feel free to
          contact me.
        </p>
        <a
          href="https://www.linkedin.com/in/nadezhda-zubko-developer/"
          target="_blank"
          rel="noreferrer"
        >
          <a href="mailto:na-zubko@outlook.com">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Contact
            </button>
          </a>
        </a>
      </section>
    </>
  );
};

export default About;
