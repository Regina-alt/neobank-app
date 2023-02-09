import "./Support.css";

import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function Support() {
  const ref = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    fetch(
      "http://localhost:8080/email",
      {
        method: "POST",
        mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(data),
      }
    ).catch((err) => {
      if (err) {
        ref.current.innerHTML = "<p>Something wrong, try again later</p>";
        localStorage.clear();
      }
    });
    localStorage.setItem("email", true);
    ref.current.innerHTML =
      "<p>You are already subscribed to the bank's newsletter</p>";
    reset();
  };

  let local = localStorage.getItem("email");
  useEffect(() => {
    if (local) {
      ref.current.innerHTML =
        "<p>You are already subscribed to the bank's newsletter</p>";
    }
  }, []);

  return (
    <>
      <p className="title-support">Support</p>
      <p className="subtitle-support">Subscribe Newsletter & get</p>
      <p className="bank-news">Bank News</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="support-form"
        ref={ref}
      >
        <label>
          <input
            className="email"
            type="email"
            placeholder="Your email"
            {...register("email", { required: true })}
          />
        </label>
        <input
          id="btn-support"
          className="btn-support"
          type="submit"
          value="Subscribe"
        />
        <div>{errors?.email && <p>Enter your email</p>}</div>
      </form>
    </>
  );
}

export default Support;
