const USERNAME = "edwinperaza@csu.fullerton.edu";
const PASSWORD = "pocketbaseproject";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement(App, null), /* @__PURE__ */ React.createElement(About, null))
);
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h1", { className: "bg-blue-900 text-red-700" }, "Hello, ", authData.admin.email));
}
function NavBar() {
  return /* @__PURE__ */ React.createElement("header", { className: "text-gray-400 bg-gray-900 body-font" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" }, /* @__PURE__ */ React.createElement("a", { className: "flex title-font font-medium items-center text-white mb-4 md:mb-0" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      className: "w-10 h-10 text-white p-2 bg-green-500 rounded-full",
      viewBox: "0 0 24 24"
    },
    /* @__PURE__ */ React.createElement("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" })
  ), /* @__PURE__ */ React.createElement("span", { className: "ml-3 text-xl" }, "Santa Please!")), /* @__PURE__ */ React.createElement("nav", { className: "md:ml-auto flex flex-wrap items-center text-base justify-center" }, /* @__PURE__ */ React.createElement("a", { className: "mr-5 hover:text-white" }, "About Us"), /* @__PURE__ */ React.createElement("a", { className: "mr-5 hover:text-white" }, "Sign Up")), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0",
      "control-id": "ControlID-86"
    },
    "Log In",
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        className: "w-4 h-4 ml-1",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M5 12h14M12 5l7 7-7 7" })
    )
  )));
}
function About() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", { className: "bg-gray-900" }, /* @__PURE__ */ React.createElement("div", { className: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "relative flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "inline-flex items-center mr-8" }, /* @__PURE__ */ React.createElement("span", { className: "ml-2 text-xl font-bold tracking-wide text-gray-100 hover:text-blue-300" }, "FavFlicks")), /* @__PURE__ */ React.createElement("ul", { className: "flex items-center space-x-8 lg:flex bar-element" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-300",
      href: "/aboutus",
      "aria-label": "About us",
      title: "About us"
    },
    "About us"
  )))), /* @__PURE__ */ React.createElement("ul", { className: "flex items-center space-x-8 lg:flex bar-element" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "group relative inline-block overflow-hidden border border-blue-300 px-8 py-3 focus:outline-none focus:ring",
      href: "/user/signup"
    },
    /* @__PURE__ */ React.createElement("span", { className: "absolute inset-y-0 left-0 w-[2px] bg-blue-300 transition-all group-hover:w-full group-active:bg-indigo-500" }),
    /* @__PURE__ */ React.createElement("span", { className: "relative text-sm font-medium text-blue-300 transition-colors group-hover:text-white" }, "Sign up")
  )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "group relative inline-block overflow-hidden border border-blue-300 px-9 py-3 focus:outline-none focus:ring",
      href: "/user/login"
    },
    /* @__PURE__ */ React.createElement("span", { className: "absolute inset-y-0 right-0 w-[2px] bg-blue-300 transition-all group-hover:w-full group-active:bg-indigo-500" }),
    /* @__PURE__ */ React.createElement("span", { className: "relative text-sm font-medium text-blue-300 transition-colors group-hover:text-white" }, "Log in")
  ))))))), /* @__PURE__ */ React.createElement("main", { className: "flex-grow" }, /* @__PURE__ */ React.createElement("h1", { className: "mt-6 text-center text-3xl font-bold mb-2" }, "About Us"), /* @__PURE__ */ React.createElement("hr", { className: "block border-gray-800 max-w-5xl mx-auto w-[98%] mb-6" }), /* @__PURE__ */ React.createElement("div", { className: "px-4 max-w-4xl mx-auto flex flex-col gap-10" }, /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h3", { className: "about-heading" }, "Our mission"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("p", null, "Here at FavFlicks, we are passionate about all things cinema and wanted to help others keep track of all their favorite films! With this website, you can add different movie categories, each with their own description, and your favorite movies from each category. You can even add your personal rating of the film!"), /* @__PURE__ */ React.createElement("p", null, "Our web application was built using", /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "about-link",
      href: "https://remaketheweb.com/",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    "Remake"
  ), "for functionality / interactivity and", /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "about-link",
      href: "https://tailwindcss.com/",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    "Tailwind CSS"
  ), "for styling!"))), /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h3", { className: "about-heading" }, "Team members"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-around text-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "../assets/images/clapperboard.png",
      className: "about-img",
      alt: "clapperboard"
    }
  ), /* @__PURE__ */ React.createElement("p", null, "Edwin Peraza")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "../assets/images/film-camera.svg",
      className: "about-img",
      alt: "camera"
    }
  ), /* @__PURE__ */ React.createElement("p", null, "Ethan Safai")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "../assets/images/film-strip.png",
      className: "about-img",
      alt: "film strip"
    }
  ), /* @__PURE__ */ React.createElement("p", null, "Ethan Ton")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "../assets/images/popcorn.svg",
      className: "about-img",
      alt: "popcorn"
    }
  ), /* @__PURE__ */ React.createElement("p", null, "Jin Huang")))))), /* @__PURE__ */ React.createElement("footer", { className: "bg-gray-200 text-center lg:text-left" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-700 text-center p-4" }, " ", "\xA9 2022 Copyright: Group 12", " ")));
}
