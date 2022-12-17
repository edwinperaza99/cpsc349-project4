const USERNAME = "edwinperaza@csu.fullerton.edu";
const PASSWORD = "pocketbaseproject";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
);
function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Main;
      break;
    case "/About":
      Component = About;
      break;
    case "/SignIn":
      Component = SignIn;
      break;
    case "/Forgot":
      Component = Forgot;
      break;
    case "/LogIn":
      Component = LogIn;
      break;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement("div", { className: "App" }), /* @__PURE__ */ React.createElement(Component, null));
}
function Main() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("p", null, "Use NavBar"), /* @__PURE__ */ React.createElement("div", { className: "hero min-h-screen bg-base-200" }, /* @__PURE__ */ React.createElement("div", { className: "hero-content flex-col lg:flex-row" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://placeimg.com/260/400/arch",
      className: "max-w-sm rounded-lg shadow-2xl"
    }
  ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-5xl font-bold" }, "Welcome!"), /* @__PURE__ */ React.createElement("p", { className: "py-6" }, "Create your own wishlist with all your favorite products. Send your wishlist to all your friends!"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary" }, "Get Started")))));
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
  ), /* @__PURE__ */ React.createElement("span", { className: "ml-3 text-xl" }, "Santa, Please!")), /* @__PURE__ */ React.createElement("nav", { className: "md:ml-auto flex flex-wrap items-center text-base justify-center" }, /* @__PURE__ */ React.createElement("a", { className: "mr-5 hover:text-white", href: "/About" }, "About Us"), /* @__PURE__ */ React.createElement("a", { className: "mr-5 hover:text-white", href: "/SignUp" }, "Sign Up")), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0",
      "control-id": "ControlID-86"
    },
    /* @__PURE__ */ React.createElement("a", { href: "/LogIn" }, "LogIn"),
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
  return /* @__PURE__ */ React.createElement("div", { class: "bg-green-800 h-screen" }, /* @__PURE__ */ React.createElement("div", { class: "flex-grow px-4 py-16 bg-green-800 h-fit" }, /* @__PURE__ */ React.createElement("section", { class: "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" }, /* @__PURE__ */ React.createElement("h2", { class: "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-neutral-50 sm:text-4xl md:mx-auto" }, /* @__PURE__ */ React.createElement("span", { class: "relative inline-block" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 52 24",
      fill: "currentColor",
      class: "absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "pattern",
      {
        id: "1d4040f3-9f3e-4ac7-b117-7d4009658ced",
        x: "0",
        y: "0",
        width: ".135",
        height: ".30"
      },
      /* @__PURE__ */ React.createElement("circle", { cx: "1", cy: "1", r: ".7" })
    ))
  ), /* @__PURE__ */ React.createElement("span", { class: "relative " }, "Welcome our lovely devs"))), /* @__PURE__ */ React.createElement("p", { class: "text-base text-neutral-50 md:text-lg" }, "The masterminds behind the Santa, Please!")), /* @__PURE__ */ React.createElement("section", { class: "flex flex-col gap-3 items-center justify-center lg:flex-row text-neutral-50s" }, /* @__PURE__ */ React.createElement("div", { class: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { class: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/u/89877041?v=4",
      alt: "Natan K. github profile picture",
      class: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { class: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Nathan Kim")), /* @__PURE__ */ React.createElement("p", { class: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { class: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/mploythai/cpsc349-proj2",
      target: "_blank",
      class: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))), /* @__PURE__ */ React.createElement("div", { class: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { class: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/edwinperaza99",
      alt: "Edwin P. github profile picture",
      class: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { class: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Edwin Peraza")), /* @__PURE__ */ React.createElement("p", { class: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { class: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/edwinperaza99",
      target: "_blank",
      class: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))), /* @__PURE__ */ React.createElement("div", { class: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { class: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/mrmarlrico",
      alt: "Marl R. github profile picture",
      class: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { class: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Marl Rico")), /* @__PURE__ */ React.createElement("p", { class: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { class: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/mrmarlrico",
      target: "_blank",
      class: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))), /* @__PURE__ */ React.createElement("div", { class: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { class: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/ethanton0927",
      alt: "Ethan T. github profile picture",
      class: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { class: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Ethan Ton")), /* @__PURE__ */ React.createElement("p", { class: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { class: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/ethanton0927",
      target: "_blank",
      class: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))))));
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-gray-200 text-center lg:text-left" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-700 text-center p-4" }, " ", "\xA9 2022 Copyright: Group 8", " "));
}
function SignUp() {
  return /* @__PURE__ */ React.createElement("main", { class: "flex-grow" }, /* @__PURE__ */ React.createElement("div", { class: "flex items-center justify-center h-full my-40" }, /* @__PURE__ */ React.createElement("div", { class: "px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg" }, /* @__PURE__ */ React.createElement("h2", { class: "text-2xl font-bold text-center" }, "Create Your Account Today!"), /* @__PURE__ */ React.createElement("form", { action: "/user/signup", method: "post" }, /* @__PURE__ */ React.createElement("div", { class: "mt-4" }, /* @__PURE__ */ React.createElement("div", { class: "mt-4" }, /* @__PURE__ */ React.createElement("label", { class: "block" }, "Username"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "username",
      placeholder: "Username",
      class: "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { class: "mt-4" }, /* @__PURE__ */ React.createElement("label", { class: "block" }, "Email"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      class: "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { class: "mt-4" }, /* @__PURE__ */ React.createElement("label", { class: "block" }, "Password"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      class: "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { class: "flex items-baseline justify-between" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      class: "px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
    },
    "Sign up"
  )))))));
}
function LogIn() {
  return /* @__PURE__ */ React.createElement("main", { className: "flex-grow" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center h-full my-40" }, /* @__PURE__ */ React.createElement("div", { className: "px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg" }, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-bold text-center" }, "Log in to your account"), /* @__PURE__ */ React.createElement("form", { action: "/user/login", method: "post" }, /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block" }, "Username"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "username",
      placeholder: "Username",
      className: "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",
      required: ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement("label", { className: "block" }, "Password"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      className: "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",
      required: ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline justify-between" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
    },
    "Login"
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "/Forgot",
      className: "text-sm text-blue-600 hover:underline"
    },
    "Forgot password?"
  )))))));
}
function Forgot() {
  return /* @__PURE__ */ React.createElement("main", { className: "flex-grow" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center h-full my-40" }, /* @__PURE__ */ React.createElement("div", { className: "px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg" }, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-bold text-center" }, "Forgot your password?"), /* @__PURE__ */ React.createElement("p", { className: "mt-4" }, "We will send a link to your associated email account"), /* @__PURE__ */ React.createElement("form", { action: "/user/forgot", method: "post" }, /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "" }, /* @__PURE__ */ React.createElement("label", { className: "block font-bold" }, "Username"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "username",
      placeholder: "Your Username",
      className: "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",
      required: ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline justify-center" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "px-6 py-2 mt-8 w-full text-white bg-blue-600 rounded-lg hover:bg-blue-900"
    },
    "Reset my password"
  )))))));
}
