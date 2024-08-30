import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import axios from 'axios';
import { useLanguage } from './LangContext';

const CombinedPage = () => {
  const { selectedLanguages, setSelectedLanguages } = useLanguage();
  const [selectedCutoffs, setSelectedCutoffs] = useState({});
  const [form, setForm] = useState({ date: '', time: '', duration: '', period: 'AM' });
  const [isSettingsSet, setIsSettingsSet] = useState(false);
  const navigate = useNavigate();

  const languages = ['Java', 'Python', 'C++', 'C'];
  const percentages = ['90%+', '80%-90%', '70%-80%', '60%-70%', '50%-60%'];

  const handleLanguageSelect = (language) => {
    setSelectedLanguages((prevSelected) => {
      if (prevSelected.includes(language)) {
        return prevSelected.filter((lang) => lang !== language);
      } else if (prevSelected.length < 4) {
        return [...prevSelected, language];
      } else {
        alert('You can select a maximum of 4 languages.');
        return prevSelected;
      }
    });
  };

  const handleCutoffChange = (language, percentage) => {
    setSelectedCutoffs((prevState) => ({
      ...prevState,
      [language]: percentage,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setIsSettingsSet(false);
  };

  const handleEnter = () => {
    if (!form.date || !form.time || isNaN(form.duration) || form.duration <= 0) {
      alert('Please enter valid date, time, and duration.');
      return;
    }
    setIsSettingsSet(true);
  };

  const handleProceed = async () => {
    if (!selectedLanguages.every((language) => selectedCutoffs[language])) {
      alert('Please select a cutoff for each language before proceeding.');
      return;
    }
    if (!isSettingsSet) {
      alert('Please set the date, time, and duration before proceeding.');
      return;
    }

    try {
      const interviewData = {
        selectedLanguages,
        selectedCutoffs,
        interviewDetails: form,
      };

      let response = await axios.post('http://localhost:5000/langselect', interviewData);
      let res = response.data;
      alert(res);
    } catch (err) {
      console.log(err);
    }

    navigate('/company/submit');
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* Language Selection */}
        <div className="content">
          <div className="title">Select the Programming Languages for the Interview (Max 4)</div>
          <div className="language-list">
            {languages.map((language, index) => (
              <label className="custom-checkbox language-item" key={index}>
                <input
                  name="dummy"
                  type="checkbox"
                  checked={selectedLanguages.includes(language)}
                  onChange={() => handleLanguageSelect(language)}
                  aria-label={language}
                />
                <span className="checkmark"></span>
                <div className="language-name">{language}</div>
              </label>
            ))}
          </div>
        </div>

        {/* Cutoff Selection */}
        <div className="content">
          <h2 className="center-aligned">Select the Minimum Cut Off Percentage for Every Programming Language</h2>
          <br />
          <table className="cutoff-table">
            <thead>
              <tr>
                {selectedLanguages.map((language, index) => (
                  <th key={index}>{language}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {selectedLanguages.map((language, colIndex) => (
                  <td key={colIndex}>
                    <div className="checkbox-container">
                      {percentages.map((percentage, rowIndex) => (
                        <label className="custom-checkbox" key={rowIndex}>
                          <input
                            type="radio"
                            name={`cutoff-${language}`}
                            value={percentage}
                            checked={selectedCutoffs[language] === percentage}
                            onChange={() => handleCutoffChange(language, percentage)}
                          />
                          <span className="checkmark"></span>
                          {percentage}
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Interview Details */}
        <div className="content">
          <h2 className="center-aligned">Set the Interview Details</h2>
          <div className="input-container">
            <div className="input-field-container">
              <label className="input-label">Date</label>
              <input
                type="text"
                name="date"
                placeholder="DD-MM-YYYY"
                value={form.date}
                onChange={handleInputChange}
                className={`input-field ${form.date ? 'has-value' : ''}`}
              />
            </div>
            <div className="input-field-container">
              <label className="input-label">Time</label>
              <div className="time-input">
                <input
                  type="text"
                  name="time"
                  placeholder="HH:MM"
                  value={form.time}
                  onChange={handleInputChange}
                  className={`input-field ${form.time ? 'has-value' : ''}`}
                />
                <select
                  name="period"
                  value={form.period}
                  onChange={handleInputChange}
                  className="input-field period-select"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <div className="input-field-container">
              <label className="input-label">Duration</label>
              <input
                type="number"
                name="duration"
                placeholder="e.g. 30 mins"
                value={form.duration}
                onChange={handleInputChange}
                className={`input-field ${form.duration ? 'has-value' : ''}`}
              />
            </div>
            <button onClick={handleEnter} className="enter-button">Enter</button>
          </div>
          {isSettingsSet && (
            <div className="settings-confirmation">
              <p className="settings-message">Date: {form.date}</p>
              <p className="settings-message">Time: {form.time} {form.period}</p>
              <p className="settings-message">Duration: {form.duration} minutes</p>
            </div>
          )}
        </div>

        {/* Proceed Button */}
        <div className="button-container">
          <button onClick={handleProceed} className="proceed-button">Proceed</button>
        </div>
      </div>

      <style jsx global>{`
        body {
          background-color: #f7f5fb;
        }
      `}</style>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 42px 61px 71px;
        }
        @media (max-width: 991px) {
          .container {
            padding: 0 20px;
          }
        }
        .content {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #000;
          line-height: 1.26;
          padding: 20px 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
          margin-bottom: 40px;
        }
        @media (max-width: 991px) {
          .content {
            padding: 20px;
            margin-top: 40px;
          }
        }
        .title, .center-aligned {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          color: #3d52a0;
          margin-bottom: 40px;
        }
        .language-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          max-width: 400px;
        }
        .language-item, .custom-checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          cursor: pointer;
          user-select: none;
          font-size: 16px;
          color: #333;
          transition: color 0.3s;
        }
        .language-name, .settings-message {
          font-size: 18px;
          color: #3d52a0;
          font-weight: 500;
        }
        .proceed-button-container {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }
        .proceed-button, .enter-button {
          padding: 10px 20px;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          background-color: #3d52a0;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .proceed-button:hover, .enter-button:hover {
          background-color: #1e317a;
        }
        .checkbox-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .cutoff-table {
          width: 100%;
          border-collapse: collapse;
        }
        .cutoff-table th, .cutoff-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }
        .cutoff-table th {
          background-color: #f2f2f2;
          color: #333;
        }
        .input-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .input-field-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 400px;
          margin-bottom: 20px;
        }
        .input-field {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          color: #333;
          transition: border-color 0.3s;
        }
        .input-field:focus, .input-field.has-value {
          border-color: #3d52a0;
        }
        .input-label {
          margin-bottom: 5px;
          font-size: 16px;
          font-weight: 500;
          color: #333;
        }
        .time-input {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .period-select {
          width: 60px;
        }
        .settings-confirmation {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default CombinedPage;
