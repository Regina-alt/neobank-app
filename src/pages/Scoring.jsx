import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Audio } from "react-loader-spinner";
import Desition from "../components/Desition";

function Scoring() {
  const pathname = window.location.pathname;
  const [formStep, setFormStep] = useState(0);
  let [loading, setLoading] = useState(false);

  let id = pathname.split("/");
  id = id[2];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    fetch(`http://localhost:8080/application/registration/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        dependentAmount: data.dependentAmount,
        passportIssueDate: data.passportIssueDate,
        passportIssueBranch: data.passportIssueBranch,
        employment: {
          employmentStatus: data.employmentStatus,
          employerINN: data.employerINN,
          salary: data.salary,
          position: data.position,
          workExperienceTotal: data.workExperienceTotal,
          workExperienceCurrent: data.workExperienceCurrent,
        },
        account: "11223344556677889900",
      }),
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
    reset();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    setFormStep((cur) => cur + 1);
  };
  return (
    <div className="formScoring">
<>
      {loading ? (
        <Audio color="#003CFF"/>
      ) : (
        <>
          {formStep === 0 && (
            <div className="scoring">
              <div className="header-scoring">
                <h1>Continuation of the application</h1>
                <p>Step 2 of 5</p>
              </div>
              <div className="body-scoring">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="item1-scoring">
                    <label>
                      What's your gender <span>*</span>
                      <br />
                      <select {...register("gender", { required: true })}>
                        <option value="MALE">Male</option>
                        <option value="FAMALE">Famale</option>
                      </select>
                    </label>
                    <div>
                      {errors?.gender && <p>Select one of the options</p>}
                    </div>
                  </div>
                  <div className="item2-scoring">
                    <label>
                      Your marital status <span>*</span>
                      <br />
                      <select
                        {...register("maritalStatus", { required: true })}
                      >
                        <option value="MARRIED">Married</option>
                        <option value="DIVORCED">Divorced</option>
                        <option value="SINGLE">Single</option>
                        <option value="WIDOW_WIDOWER">Widow/widower</option>
                      </select>
                    </label>
                    <div>
                      {errors?.maritalStatus && (
                        <p>Select one of the options</p>
                      )}
                    </div>
                  </div>
                  <div className="item3-scoring">
                    <label>
                      Your number of dependents <span>*</span>
                      <br />
                      <select
                        {...register("dependentAmount", { required: true })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </label>
                    <div>
                      {errors?.dependentAmount && (
                        <p>Select one of the options</p>
                      )}
                    </div>
                  </div>
                  <div className="item4-scoring">
                    <label>
                      Date of issue of the passport <span>*</span>
                      <br />
                      <input
                        placeholder="Select Date and Time"
                        {...register("passportIssueDate", { required: true })}
                        className={`${
                          (errors?.passportIssueDate && "invalid") ||
                          (!errors.passportIssueDate && "check")
                        }`}
                      />
                    </label>
                    <div>
                      {errors?.passportIssueDate && (
                        <p>Incorrect date of passport issue date</p>
                      )}
                    </div>
                  </div>
                  <div className="item5-scoring">
                    <label>
                      Division code <span>*</span>
                      <br />
                      <input
                        placeholder="000-000"
                        {...register("passportIssueBranch", {
                          required: true,
                          maxLength: 7,
                          minLength: 7,
                          pattern: /^[0-9.-]*$/,
                        })}
                        className={`${
                          (errors?.passportIssueBranch && "invalid") ||
                          (!errors.passportIssueBranch && "check")
                        }`}
                      />
                    </label>
                    <div>
                      {errors?.passportIssueBranch && (
                        <p>The series must be 6 digits</p>
                      )}
                    </div>
                  </div>
                  <div className="item6-scoring">
                    <p className="emp">Employment</p>
                  </div>
                  <div className="item7-scoring">
                    <label>
                      Your employment status <span>*</span>
                      <br />
                      <select
                        {...register("employmentStatus", { required: true })}
                      >
                        <option value="UNEMPLOYED">Unemployed</option>
                        <option value="SELF_EMPLOYED">Self employed</option>
                        <option value="EMPLOYED">Employed</option>
                        <option value="BUSINESS_OWNER">Business owner</option>
                      </select>
                    </label>
                    <div>
                      {errors?.employmentStatus && (
                        <p>Select one of the options</p>
                      )}
                    </div>
                  </div>
                  <div className="item8-scoring">
                    <label>
                      Your employer INN <span>*</span>
                      <br />
                      <input
                        placeholder="000000000000"
                        {...register("employerINN", {
                          required: true,
                          maxLength: 12,
                          minLength: 12,
                          pattern: /^[0-9]*$/,
                        })}
                        className={`${
                          (errors?.employerINN && "invalid") ||
                          (!errors.employerINN && "check")
                        }`}
                      />
                    </label>
                    <div>
                      {errors?.employerINN && (
                        <p>Department code must be 12 digitss</p>
                      )}
                    </div>
                  </div>
                  <div className="item9-scoring">
                    <label>
                      Your salary <span>*</span>
                      <br />
                      <input
                        placeholder="For example 100 000"
                        {...register("salary", {
                          required: true,
                          pattern: /^[0-9]*$/,
                        })}
                        className={`${
                          (errors?.salary && "invalid") ||
                          (!errors.salary && "check")
                        }`}
                      />
                    </label>
                    <div>{errors?.salary && <p>Enter your salary</p>}</div>
                  </div>
                  <div className="item10-scoring">
                    <label>
                      Your position <span>*</span>
                      <br />
                      <select {...register("position", { required: true })}>
                        <option value="WORKER">Worker</option>
                        <option value="MID_MANAGER">Middle Manager</option>
                        <option value="TOP_MANAGER">Top Manager</option>
                        <option value="OWNER">Owner</option>
                      </select>
                    </label>
                    <div>
                      {errors?.position && <p>Select one of the options</p>}
                    </div>
                  </div>
                  <div className="item11-scoring">
                    <label>
                      Your work experience total <span>*</span>
                      <br />
                      <input
                        placeholder="For example 10"
                        {...register("workExperienceTotal", {
                          required: true,
                          pattern: /^[0-9]*$/,
                          maxLength: 2,
                        })}
                        className={`${
                          (errors?.workExperienceTotal && "invalid") ||
                          (!errors.workExperienceTotal && "check")
                        }`}
                      />
                    </label>
                    <div>
                      {errors?.workExperienceTotal && (
                        <p>Enter your work experience total</p>
                      )}
                    </div>
                  </div>
                  <div className="item12-scoring">
                    <label>
                      Your work experience current <span>*</span>
                      <br />
                      <input
                        placeholder="For example 2"
                        {...register("workExperienceCurrent", {
                          required: true,
                          pattern: /^[0-9]*$/,
                          maxLength: 2,
                        })}
                        className={`${
                          (errors?.workExperienceCurrent && "invalid") ||
                          (!errors.workExperienceCurrent && "check")
                        }`}
                      />
                    </label>
                    <div>
                      {errors?.workExperienceCurrent && (
                        <p>Enter your work experience current</p>
                      )}
                    </div>
                  </div>
                  <div className="item13-scoring">
                    <button className="btn-sub">Continue</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {formStep === 1 && <Desition />}
        </>
      )}
    </>
    </div>
    
  );
}

export default Scoring;
