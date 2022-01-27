import React from "react";

const FormTwo = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Let's setup a home for all your work</h1>
      <p>you can always create another workspace later</p>

      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="workspace_name">Workspace Name</label>
        <input name="workspace_name" placeholder="eden" />
        <label htmlFor="workspace_url">Workspace Url</label>
        <input name="workspace_url" />
        <button>create workspace</button>
      </form>
    </div>
  );
};

export default FormTwo;
