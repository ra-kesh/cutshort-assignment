import React from "react";

const FormThree = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>How are you planning to use Eden ?</h1>
      <p>We will streamline your setup experience accordingly</p>

      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <label htmlFor="workspace_type">
            <input name="workspace_type" type="radio" />
            <div>
              <h3>For myself</h3>
              <p>write better, think more clearly, stay organised</p>
            </div>
          </label>
          <label htmlFor="workspace_type">
            <input name="workspace_type" type="radio" />
            <div>
              <h3>With my team</h3>
              <p>wikis, docs, tasks, projects, all in one place</p>
            </div>
          </label>
        </div>

        <button>create workspace</button>
      </form>
    </div>
  );
};

export default FormThree;
