import React, { useState } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Eight from './Eight';

const Form = ({ nextPage, page, prevPage, formData, setformData, error }) => {
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = () => {
    alert('form submit');
  };

  const components = [
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eight,
  ];

  return (
    <div className='form mt96 w-50 position-relative mb-4'>
      {React.createElement(components[page], {
        setformData,
        handleChange,
        formData,
        nextPage,
        prevPage,
        error,
      })}

      <div className="buttonContainer">
        {page >= 0 && page < 19 ? (
          <button
            className={`text-uppercase placing px-3 py-1 end-0 mb-3`}
            onClick={nextPage}
          >
            Next
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                color="#414042"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
                </g>
              </svg>
            </span>
          </button>
        ) : (
          <button
            className={`text-uppercase placing px-3 py-1 end-0`}
            onClick={submit}
          >
            Submit
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                color="#414042"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
                </g>
              </svg>
            </span>
          </button>
        )}

        {page > 0 && (
          <button
            className={`text-uppercase placing px-3 py-1 mb-3`}
            onClick={prevPage}
          >
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                color="#414042"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"></path>
                </g>
              </svg>
            </span>{' '}
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
