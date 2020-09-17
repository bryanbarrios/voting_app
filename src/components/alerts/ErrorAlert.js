import React from 'react';
import PropTypes from 'prop-types';

export const ErrorAlert = ({ title, body }) => {
  return (
    <div>
      <div role="alert" className="m-4">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          {title}
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

ErrorAlert.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
