import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
export default function Admission() {
  const [form, setForm] = useState({
    admissionId: "",
    phone: "",
  });

  const [apply, setApply] = useState({
    name: "",
    religion: "",
    address: "",
    applyClass: "",
    dob: "",
    gender: "",
    phone: "",
    photo: null,
    email: "",
    document: null,
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const applyChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setApply((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setApply((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      toast.success("Submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      setForm({
        admissionId: "",
        phone: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();

    const formErrors = validateApply();
    if (Object.keys(formErrors).length === 0) {
      toast.success("Application Submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      setApply({
        name: "",
        religion: "",
        address: "",
        applyClass: "",
        dob: "",
        gender: "",
        phone: "",
        photo: null,
        email: "",
        document: null,
        country: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!form.admissionId.trim()) {
      formErrors.admissionId = "Admission ID is required";
    }
    if (!form.phone.trim()) {
      formErrors.phone = "Phone Number is required";
    }
    return formErrors;
  };

  const validateApply = () => {
    let formErrors = {};
    if (!apply.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!apply.religion.trim()) {
      formErrors.religion = "Religion is required";
    }
    if (!apply.address.trim()) {
      formErrors.address = "Address is required";
    }
    if (!apply.applyClass) {
      formErrors.applyClass = "Apply Class is required";
    }
    if (!apply.dob) {
      formErrors.dob = "Date of Birth is required";
    }
    if (!apply.gender) {
      formErrors.gender = "Select Your Gender";
    }
    if (!apply.phone.trim()) {
      formErrors.phone = "Phone Number is required";
    }
    if (!apply.email.trim()) {
      formErrors.email = "Email is required";
    }
    if (!apply.photo) {
      formErrors.photo = "Photo is required";
    }
    if (!apply.document) {
      formErrors.document = "Document is required";
    }
    if (!apply.country.trim()) {
      formErrors.country = "Select Your Country";
    }
    return formErrors;
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <div className="pages">
      <div className="admission--page">
        <div className="admission--container">
          <div className="admission--content-1">
            <h1>Admission</h1>
            <p>
              If you have any questions, please don't hesitate to get in touch
              via +2346583465385 or <span>info@jschool.net</span>
            </p>
          </div>
          <div className="admission--content-2">
            <div className="content-2">
              <div className="line"></div>
              <h1>Get Result</h1>
              <form onSubmit={handleSubmit} className="admission--id">
                <div className="content--2--input">
                  <div className="input">
                    <label htmlFor="admissionId">
                      Admission ID <span>*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="admissionId"
                      value={form.admissionId}
                      onChange={handleChange}
                    />
                    {errors.admissionId && (
                      <p className="error">{errors.admissionId}</p>
                    )}
                  </div>
                  <div className="input">
                    <label htmlFor="phone">
                      Phone No <span>*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>
                <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div className="admission--content-3">
            <div className="line"></div>
            <h1>Apply as a Student</h1>
            <form onSubmit={handleApplySubmit}>
              <div className="form--inputs">
                <div className="input">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={apply.name}
                    onChange={applyChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="input">
                  <label htmlFor="applyClass">
                    Apply Class <span>*</span>
                  </label>
                  <br />
                  <select
                    name="applyClass"
                    value={apply.applyClass}
                    onChange={applyChange}
                  >
                    <option value="">Select a class</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="graduate">Graduate</option>
                  </select>
                  {errors.applyClass && (
                    <p className="error">{errors.applyClass}</p>
                  )}
                </div>
                <div className="input">
                  <label htmlFor="dob">
                    Date of Birth <span>*</span>
                  </label>
                  <br />
                  <input
                    type="date"
                    name="dob"
                    value={apply.dob}
                    onChange={applyChange}
                  />
                  {errors.dob && <p className="error">{errors.dob}</p>}
                </div>
                <div className="input">
                  <label htmlFor="religion">
                    Religion <span>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="religion"
                    value={apply.religion}
                    onChange={applyChange}
                  />
                  {errors.religion && (
                    <p className="error">{errors.religion}</p>
                  )}
                </div>
                <div className="input">
                  <label htmlFor="gender">
                    Gender <span>*</span>
                  </label>
                  <br />
                  <select
                    name="gender"
                    value={apply.gender}
                    onChange={applyChange}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="error">{errors.gender}</p>}
                </div>

                <div className="input">
                  <label htmlFor="phone">
                    Phone <span>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    value={apply.phone}
                    onChange={applyChange}
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div className="input">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={apply.email}
                    onChange={applyChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="input">
                  <label htmlFor="country">
                    Country <span>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="country"
                    value={apply.country}
                    onChange={applyChange}
                  />
                  {errors.country && <p className="error">{errors.country}</p>}
                </div>
                <div className="input">
                  <label htmlFor="address">
                    Address <span>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="address"
                    value={apply.address}
                    onChange={applyChange}
                  />
                  {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div className="input input-file">
                  <label htmlFor="photo">
                    Photo <span>*</span>
                  </label>
                  <br />
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={applyChange}
                  />
                  {errors.photo && <p className="error">{errors.photo}</p>}
                </div>
                <div className="input input-file">
                  <label htmlFor="document">
                    Upload Document <span>*</span>
                  </label>
                  <br />
                  <input
                    type="file"
                    name="document"
                    accept=".pdf,.doc,.docx"
                    onChange={applyChange}
                  />
                  {errors.document && (
                    <p className="error">{errors.document}</p>
                  )}
                </div>
              </div>
              <button type="submit">Apply</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}
