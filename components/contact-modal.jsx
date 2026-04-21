"use client";

import { useEffect, useState } from "react";

const domainOptions = [
  "Product & Innovation",
  "Gen AI",
  "Leadership",
  "Tech & Data",
  "Operations",
  "Fintech",
];

const deliveryModes = ["Online", "Offline", "Hybrid"];

const initialForm = {
  name: "",
  workEmail: "",
  phoneCode: "+91",
  company: "",
  domain: "",
  teamSize: "",
  deliveryMode: "",
  location: "",
};

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (!open) {
      setStatus({ state: "idle", message: "" });
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "" });

    const payload = {
      ...form,
      goal: [
        `Domain: ${form.domain}`,
        `Delivery mode: ${form.deliveryMode}`,
        `Location: ${form.location}`,
        `Phone code: ${form.phoneCode}`,
      ].join(" | "),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit your enquiry right now.");
      }

      setStatus({ state: "success", message: data.message });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        aria-labelledby="contact-modal-title"
        aria-modal="true"
        className="modal-card"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="modal-aside">
          <p className="modal-kicker">Enterprise Enquiry</p>
          <h2 id="contact-modal-title">Tell us what your team needs.</h2>
          <p className="modal-copy">
            Share your goals and we will recommend a capability-building path
            designed for your learners, timelines, and business outcomes.
          </p>

          <ul className="modal-points">
            <li>Tailored learning journeys for enterprise teams</li>
            <li>Flexible online, offline, and hybrid delivery</li>
            <li>Support from experienced domain specialists</li>
          </ul>
        </div>

        <div className="modal-form-panel">
          <div className="modal-topbar">
            <div className="modal-topbar-copy">
              <p className="modal-eyebrow">Request a consultation</p>
              <h3>Enquire Now</h3>
              <p className="modal-form-copy">
                Share a few details and our enterprise team will get back to you shortly.
              </p>
            </div>
            <button
              aria-label="Close enquiry modal"
              className="modal-close"
              onClick={onClose}
              type="button"
            >
              &times;
            </button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label className="form-field">
                <span className="form-label">Full name</span>
                <input
                  aria-label="Full name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                  value={form.name}
                />
              </label>

              <label className="form-field">
                <span className="form-label">Work email</span>
                <input
                  aria-label="Work email"
                  name="workEmail"
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                  type="email"
                  value={form.workEmail}
                />
              </label>

              <label className="form-field form-field-select">
                <span className="form-label">Country code</span>
                <span className="form-select-shell form-select-shell-phone">
                  <span aria-hidden="true" className="phone-flag">
                    <span className="phone-flag-stripe phone-flag-stripe-saffron" />
                    <span className="phone-flag-stripe phone-flag-stripe-white" />
                    <span className="phone-flag-stripe phone-flag-stripe-green" />
                  </span>
                  <select
                    aria-label="Country code"
                    className="form-select"
                    name="phoneCode"
                    onChange={handleChange}
                    value={form.phoneCode}
                  >
                    <option value="+91">+91</option>
                  </select>
                  <span aria-hidden="true" className="form-chevron">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.25 4.5L6 8.25 9.75 4.5" />
                    </svg>
                  </span>
                </span>
              </label>

              <label className="form-field">
                <span className="form-label">Company</span>
                <input
                  aria-label="Company"
                  name="company"
                  onChange={handleChange}
                  placeholder="Enter company name"
                  required
                  value={form.company}
                />
              </label>

              <label className="form-field form-field-select">
                <span className="form-label">Domain</span>
                <span className="form-select-shell">
                  <select
                    aria-label="Select domain"
                    className="form-select"
                    name="domain"
                    onChange={handleChange}
                    required
                    value={form.domain}
                  >
                    <option value="" disabled>
                      Select Domain
                    </option>
                    {domainOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span aria-hidden="true" className="form-chevron">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.25 4.5L6 8.25 9.75 4.5" />
                    </svg>
                  </span>
                </span>
              </label>

              <label className="form-field">
                <span className="form-label">Team size</span>
                <input
                  aria-label="Team size"
                  name="teamSize"
                  onChange={handleChange}
                  placeholder="Enter No. of candidates"
                  required
                  value={form.teamSize}
                />
              </label>

              <label className="form-field form-field-select">
                <span className="form-label">Mode of delivery</span>
                <span className="form-select-shell">
                  <select
                    aria-label="Select mode of delivery"
                    className="form-select"
                    name="deliveryMode"
                    onChange={handleChange}
                    required
                    value={form.deliveryMode}
                  >
                    <option value="" disabled>
                      Select Mode of Delivery *
                    </option>
                    {deliveryModes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span aria-hidden="true" className="form-chevron">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.25 4.5L6 8.25 9.75 4.5" />
                    </svg>
                  </span>
                </span>
              </label>

              <label className="form-field">
                <span className="form-label">Location</span>
                <input
                  aria-label="Location"
                  name="location"
                  onChange={handleChange}
                  placeholder="Eg: Gurgaon, Delhi, India"
                  required
                  value={form.location}
                />
              </label>
            </div>

            <button className="button button-primary button-full form-submit" type="submit">
              {status.state === "loading" ? "Submitting..." : "Submit"}
            </button>
          </form>

          {status.message ? (
            <p className={`form-status form-status-${status.state}`}>{status.message}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
