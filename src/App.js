import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800 min-h-screen m-0 p-0">
      <header className="bg-blue-900 text-white py-5 text-center">
        <h1 className="m-0 font-bold text-4xl">Sampath Reddy</h1>
        <p className="mt-1">Senior AR Process / Area of Expertise</p>
      </header>

      <nav className="flex justify-center bg-blue-600">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-white text-lg transition-colors duration-300 ${
              activeTab === tab.id ? "bg-blue-800" : "bg-transparent hover:bg-blue-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md my-10">
        {activeTab === "experience" && (
          <section>
            <h2 className="border-b-4 border-blue-600 pb-3 mb-6 text-2xl font-semibold">Work Experience</h2>
            <ul className="list-none p-0 space-y-4">
              <li>
                <strong>Senior AR Analyst</strong> at Aloha Technology Private Limited (2025 - Present)
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Managed Aprior Authorization project for Dermatology specialty.</li>
                  <li>Led a team of analysts to manage and timely process efficiency of authorizations.</li>
                  <li>Managing day-to-day scheduled appointments and submitting same-day authorizations.</li>
                </ul>
              </li>
              <li>
                <strong>Senior Service Co-Ordinator</strong> Aeries Technologies (2022 - 2014)
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Handled AR denials and prior authorization processes.</li>
                  <li>Collaborated with payers to ensure timely claim resolution.</li>
                  <li>Handled a team of 8 members for both prior authorization and schedule onboarding.</li>
                  <li>Analyzed trends of denials and created dashboards for easy reference and fast solutions.</li>
                </ul>
              </li>
              <li>
                <strong>Senior Claims Associate</strong> Optum Technologies (2015 - 2012)
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Handled claims adjudication for both physician and hospital claims.</li>
                  <li>Handled a 20-member team and acted as a subject matter expert for claims queries.</li>
                  <li>Audited and made quality reports; conducted one-on-one sessions for error discussions.</li>
                  <li>Took weekly sessions on new topics and updates on claims adjudication.</li>
                </ul>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "skills" && (
          <section>
            <h2 className="border-b-4 border-blue-600 pb-3 mb-6 text-2xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Claims Adjudication & RCM Process</li>
              <li>Prior Authorization Management</li>
              <li>Healthcare AR Denials Analysis</li>
              <li>Data Analysis & Reporting</li>
              <li>Customer Service & Communication</li>
            </ul>
          </section>
        )}

        {activeTab === "education" && (
          <section>
            <h2 className="border-b-4 border-blue-600 pb-3 mb-6 text-2xl font-semibold">Education</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Master of Business Administration - JNTUH University (2010 - 2013)</li>
              <li>Bachelor of Science in Biotechnology - Kakatiya University (2005 - 2009)</li>
            </ul>
          </section>
        )}

        {activeTab === "projects" && (
          <section>
            <h2 className="border-b-4 border-blue-600 pb-3 mb-6 text-2xl font-semibold">Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>RCM Process Automation</strong>: Implemented automation tools to reduce manual claims follow-up by 40%.
              </li>
              <li>
                <strong>AR Denial Tracking Dashboard</strong>: Developed reporting dashboards for improved denial management.
              </li>
            </ul>
          </section>
        )}

        {activeTab === "contact" && (
          <section>
            <h2 className="border-b-4 border-blue-600 pb-3 mb-6 text-2xl font-semibold">Contact</h2>
            <p>Email: mydubkr@gmail.com</p>
            <p>Phone: 9848496591</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://www.linkedin.com/in/sampath-reddy-272649321/
              </a>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
