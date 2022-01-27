import React from "react";

const FormOne = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Welcome! first thing first..</h1>
      <p>you can always change them later</p>

      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="full_name">Full Name</label>
        <input name="full_name" />
        <label htmlFor="display_name">Display Name</label>
        <input name="display_name" />
        <button>create workspace</button>
      </form>
    </div>
  );
};

export default FormOne;
