import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Audio } from "react-loader-spinner";
import Offer from "./Offer";

function FormPrescoring() {
  const [formStep, setFormStep] = useState(0);
  let [offers, setOffer] = useState({});
  localStorage.setItem("formStep",formStep);

  let [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    fetch("http://localhost:8080/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((offer) => setOffer(offer));

    reset();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    setFormStep((cur) => cur + 1);
  };

  return (
    <div className="formCard">
      {loading ? (
        <Audio color="#003CFF" />
      ) : (
        <>
          {formStep === 0 && (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-pre">
                  <div className="item1-form">
                    <div className="form-text">
                      <h1>Customize your card</h1>
                      <p>Step 1 of 5</p>
                    </div>

                    <div className="slider">
                      <p>Select amount</p>
                      <p>Slider don't work for now :)</p>
                      <div className="range">
                        <input type="range" />
                      </div>
                      <div className="max-min">
                        <p>15000</p>
                        <p>600000</p>
                      </div>
                    </div>
                  </div>
                  <div className="item2-form">
                    <label>
                      You have chosen the amount
                      <br />
                      <input
                        {...register("amount", {
                          required: true,
                          min: 15000,
                          max: 600000,
                        })}
                      />
                    </label>
                    <div>{errors?.amount && <p>Wrong amount</p>}</div>
                  </div>
                  <div className="item3-form">
                    <h2>Contact Information</h2>
                    <div className="content-form">
                      <div className="item1-formdown">
                        <label>
                          Your last name <span>*</span>
                          <br />
                          <input
                            placeholder="For Example Doe"
                            {...register("lastName", { required: true })}
                            className={`${
                              (errors?.lastName && "invalid") ||
                              (!errors.lastName && "check")
                            }`}
                          />
                        </label>
                        <div>
                          {errors?.lastName && <p>Enter your last name</p>}
                        </div>
                      </div>

                      <div className="item2-formdown">
                        <label>
                          Your first name <span>*</span>
                          <br />
                          <input
                            placeholder="For Example Jhon"
                            {...register("firstName", { required: true })}
                            className={`${
                              (errors?.firstName && "invalid") ||
                              (!errors.firstName && "check")
                            }`}
                          />
                        </label>
                        <div>
                          {errors?.firstName && <p>Enter your first name</p>}
                        </div>
                      </div>

                      <div className="item3-formdown">
                        <label>
                          Your patronymic
                          <br />
                          <input
                            placeholder="For Example Victorovich"
                            {...register("middleName", { required: false })}
                          />
                        </label>
                      </div>

                      <div className="item4-formdown">
                        <label>
                          Select term <span>*</span>
                          <br />
                          <select {...register("term", { required: false })}>
                            <option value="6">6 month</option>
                            <option value="12">12 month</option>
                            <option value="18">18 month</option>
                            <option value="24">24 month</option>
                          </select>
                        </label>
                      </div>

                      <div className="item5-formdown">
                        <label>
                          Your email <span>*</span>
                          <br />
                          <input
                            placeholder="test@gmail.com"
                            type="email"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            })}
                            className={`${
                              (errors?.email && "invalid") ||
                              (!errors.email && "check")
                            }`}
                          />
                        </label>
                        <div>
                          {errors?.email && <p>Incorrect email address</p>}
                        </div>
                      </div>

                      <div className="item6-formdown">
                        <label>
                          Your date of birth <span>*</span>
                          <br />
                          <input
                            type="date"
                            {...register("birthdate", {
                              required: true,
                              max: "2005-01-27",
                            })}
                            className={`${
                              (errors?.birthdate && "invalid") ||
                              (!errors.birthdate && "check")
                            }`}
                          />
                        </label>
                        <div>
                          {errors?.birthdate && <p>Incorrect date of birth</p>}
                        </div>
                      </div>

                      <div className="item7-formdown">
                        <label>
                          Your passport series <span>*</span>
                          <br />
                          <input
                            placeholder="0000"
                            {...register("passportSeries", {
                              required: true,
                              maxLength: 4,
                              minLength: 4,
                              pattern: /^[0-9]*$/,
                            })}
                            className={`${
                              (errors?.passportSeries && "invalid") ||
                              (!errors.passportSeries && "check")
                            }`}
                          />
                        </label>
                        <div>
                          {errors?.passportSeries && (
                            <p>The series must be 4 digits</p>
                          )}
                        </div>
                      </div>

                      <div className="item8-formdown">
                        <label>
                          Your passport number <span>*</span>
                          <br />
                          <input
                            placeholder="000000"
                            {...register("passportNumber", {
                              required: true,
                              maxLength: 6,
                              minLength: 6,
                              pattern: /^[0-9]*$/,
                            })}
                            className={`${
                              (errors?.passportNumber && "invalid") ||
                              (!errors.passportNumber && "check")
                            }`}
                          />
                        </label>
                        <div>
                          {errors?.passportNumber && (
                            <p>The series must be 6 digits</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="btn-form">
                      <button className="btn-sub">Continue</button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          )}

          {formStep === 1 && (
           <Offer offers={offers} />
          )}
          
        </>
      )}
    </div>
  );
}

export default FormPrescoring;
