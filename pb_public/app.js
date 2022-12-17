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
    case "/SignUp":
      Component = SignUp;
      break;
    case "/Forgot":
      Component = Forgot;
      break;
    case "/LogIn":
      Component = LogIn;
      break;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement(Component, null), /* @__PURE__ */ React.createElement(Footer, null));
}
function Main(props) {
  return /* @__PURE__ */ React.createElement("main", { className: "bg-green-900 h-[calc(100vh-136px)]" }, /* @__PURE__ */ React.createElement("div", { className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-10 lg:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/edwinperaza99/cpsc349-project4",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        ...props
      },
      /* @__PURE__ */ React.createElement("path", { d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" })
    )
  )), /* @__PURE__ */ React.createElement("div", { className: "max-w-xl mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none" }, "CREATE YOUR", /* @__PURE__ */ React.createElement("br", { className: "hidden md:block" }), "FIRST WISHLIST", " ", /* @__PURE__ */ React.createElement("span", { className: "inline-block text-deep-purple-accent-400" }, "TODAY!")), /* @__PURE__ */ React.createElement("p", { className: "text-base text-gray-300 md:text-lg" }, "Santa, Please! Allows you to create wishlists with your favorite products. You can submit your wishlist to your loved ones (in the hopes to receive a present).")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "/SignUp",
      "aria-label": "",
      className: "inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-red-600"
    },
    "Sign Up Now!",
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: "inline-block w-3 ml-2",
        fill: "currentColor",
        viewBox: "0 0 12 12"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" })
    )
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center -mx-4 lg:pl-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-end px-3" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56",
      src: "https://images.pexels.com/photos/306864/pexels-photo-306864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: ""
    }
  ), /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40",
      src: "https://images.pexels.com/photos/5727926/pexels-photo-5727926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "px-3" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80",
      src: "https://images.pexels.com/photos/3149896/pexels-photo-3149896.jpeg",
      alt: ""
    }
  ))))));
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
  ), /* @__PURE__ */ React.createElement("a", { className: "ml-3 text-xl", href: "/" }, "Santa, Please!")), /* @__PURE__ */ React.createElement("nav", { className: "md:ml-auto flex flex-wrap items-center text-base justify-center" }, /* @__PURE__ */ React.createElement("a", { className: "mr-5 hover:text-white", href: "/About" }, "About Us"), /* @__PURE__ */ React.createElement("a", { className: "mr-5 hover:text-white", href: "/SignUp" }, "Sign Up")), /* @__PURE__ */ React.createElement(
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
  return /* @__PURE__ */ React.createElement("div", { className: "bg-green-900 h-[calc(100vh-136px)]" }, /* @__PURE__ */ React.createElement("div", { className: "flex-grow px-4 py-16 bg-green-900 h-fit" }, /* @__PURE__ */ React.createElement("section", { className: "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" }, /* @__PURE__ */ React.createElement("h2", { className: "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-neutral-50 sm:text-4xl md:mx-auto" }, /* @__PURE__ */ React.createElement("span", { className: "relative inline-block" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 52 24",
      fill: "currentColor",
      className: "absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "pattern",
      {
        id: "1d4040f3-9f3e-4ac7-b117-7d4009658ced",
        x: 0,
        y: 0,
        width: ".135",
        height: ".30"
      },
      /* @__PURE__ */ React.createElement("circle", { cx: 1, cy: 1, r: ".7" })
    ))
  ), /* @__PURE__ */ React.createElement("span", { className: "relative " }, "Welcome our lovely devs"))), /* @__PURE__ */ React.createElement("p", { className: "text-base text-neutral-50 md:text-lg" }, "The masterminds behind the Santa, Please!")), /* @__PURE__ */ React.createElement("section", { className: "flex flex-col gap-3 items-center justify-center lg:flex-row text-neutral-50s" }, /* @__PURE__ */ React.createElement("div", { className: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/u/89877041?v=4",
      alt: "Natan K. github profile picture",
      className: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Nathan Kim")), /* @__PURE__ */ React.createElement("p", { className: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { className: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/mploythai/cpsc349-proj2",
      target: "_blank",
      className: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))), /* @__PURE__ */ React.createElement("div", { className: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/edwinperaza99",
      alt: "Edwin P. github profile picture",
      className: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Edwin Peraza")), /* @__PURE__ */ React.createElement("p", { className: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { className: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/edwinperaza99",
      target: "_blank",
      className: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))), /* @__PURE__ */ React.createElement("div", { className: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/mrmarlrico",
      alt: "Marl R. github profile picture",
      className: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Marl Rico")), /* @__PURE__ */ React.createElement("p", { className: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { className: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/mrmarlrico",
      target: "_blank",
      className: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))), /* @__PURE__ */ React.createElement("div", { className: "bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center items-center gap-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://avatars.githubusercontent.com/ethanton0927",
      alt: "Ethan T. github profile picture",
      className: "w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
    }
  ), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900" }, "Ethan Ton")), /* @__PURE__ */ React.createElement("p", { className: "transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center" }, '"Add what you did"'), /* @__PURE__ */ React.createElement("p", { className: "text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm" }, '"Quotes?"')), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/ethanton0927",
      target: "_blank",
      className: "w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
    },
    "GitHub Repo"
  ))))));
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-gray-200 text-center lg:text-left" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-700 text-center p-4" }, " ", "\xA9 2022 Copyright: Group 8", " "));
}
function SignUp() {
  return /* @__PURE__ */ React.createElement("main", { class: "bg-green-900 flex-grow" }, /* @__PURE__ */ React.createElement("div", { class: "flex items-center justify-center h-[calc(100vh-136px)]" }, /* @__PURE__ */ React.createElement("div", { class: "bg-red-700 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg" }, /* @__PURE__ */ React.createElement("h2", { class: "text-2xl font-bold text-center" }, "Create Your Account Today!"), /* @__PURE__ */ React.createElement("form", { action: "/user/signup", method: "post" }, /* @__PURE__ */ React.createElement("div", { class: "mt-4" }, /* @__PURE__ */ React.createElement("div", { class: "mt-4" }, /* @__PURE__ */ React.createElement("label", { class: "block" }, "Username"), /* @__PURE__ */ React.createElement(
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
      class: "px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900"
    },
    "Sign up"
  )))))));
}
function LogIn() {
  return /* @__PURE__ */ React.createElement("main", { className: "bg-green-900 flex-grow" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center h-[calc(100vh-136px)]" }, /* @__PURE__ */ React.createElement("div", { className: "bg-red-700 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg" }, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-bold text-center" }, "Log in to your account"), /* @__PURE__ */ React.createElement("form", { action: "/user/login", method: "post" }, /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block" }, "Username"), /* @__PURE__ */ React.createElement(
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
      className: "px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900"
    },
    "Login"
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "/Forgot",
      className: "text-sm text-gray-900 hover:underline"
    },
    "Forgot password?"
  )))))));
}
function Forgot() {
  return /* @__PURE__ */ React.createElement("main", { className: "bg-green-900 flex-grow" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center h-[calc(100vh-136px)]" }, /* @__PURE__ */ React.createElement("div", { className: "bg-red-700 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg" }, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-bold text-center" }, "Forgot your password?"), /* @__PURE__ */ React.createElement("p", { className: "mt-4" }, "We will send a link to your associated email account"), /* @__PURE__ */ React.createElement("form", { action: "/user/forgot", method: "post" }, /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "" }, /* @__PURE__ */ React.createElement("label", { className: "block font-bold" }, "Username"), /* @__PURE__ */ React.createElement(
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
      className: "px-6 py-2 mt-8 w-full text-white bg-green-600 rounded-lg hover:bg-green-900"
    },
    "Reset my password"
  )))))));
}
