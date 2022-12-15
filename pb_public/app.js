const USERNAME = "edwinperaza@csu.fullerton.edu";
const PASSWORD = "pocketbaseproject";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement(App, null))
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
