const USERNAME = "ADMIN_EMAIL";
const PASSWORD = "ADMIN_PASSWORD";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement("navBar", null), /* @__PURE__ */ React.createElement(App, null))
);
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h1", null, "Hello, ", authData.admin.email));
}
function navBar() {
  return /* @__PURE__ */ React.createElement("div", { className: "navbar bg-base-100" }, /* @__PURE__ */ React.createElement("div", { className: "navbar-start" }, /* @__PURE__ */ React.createElement("div", { className: "dropdown" }, /* @__PURE__ */ React.createElement("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M4 6h16M4 12h8m-8 6h16"
      }
    )
  )), /* @__PURE__ */ React.createElement(
    "ul",
    {
      tabIndex: 0,
      className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    },
    /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Item 1")),
    /* @__PURE__ */ React.createElement("li", { tabIndex: 0 }, /* @__PURE__ */ React.createElement("a", { className: "justify-between" }, "Parent", /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: "fill-current",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })
    )), /* @__PURE__ */ React.createElement("ul", { className: "p-2" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Submenu 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Submenu 2")))),
    /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Item 3"))
  )), /* @__PURE__ */ React.createElement("a", { className: "btn btn-ghost normal-case text-xl" }, "daisyUI")), /* @__PURE__ */ React.createElement("div", { className: "navbar-center hidden lg:flex" }, /* @__PURE__ */ React.createElement("ul", { className: "menu menu-horizontal px-1" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Item 1")), /* @__PURE__ */ React.createElement("li", { tabIndex: 0 }, /* @__PURE__ */ React.createElement("a", null, "Parent", /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: "fill-current",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24"
    },
    /* @__PURE__ */ React.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" })
  )), /* @__PURE__ */ React.createElement("ul", { className: "p-2" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Submenu 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Submenu 2")))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, "Item 3")))), /* @__PURE__ */ React.createElement("div", { className: "navbar-end" }, /* @__PURE__ */ React.createElement("a", { className: "btn" }, "Get started")));
}
