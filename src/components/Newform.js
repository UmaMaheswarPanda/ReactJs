import React from "react";

export default function Newform() {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2Disabled"
          style="height: 300px"
          disabled
        ></textarea>
        <label for="floatingTextarea2Disabled">Comments</label>
      </div>
      <button className="btn btn-primary">Convert to uppercase</button>
    </div>
  );
}
