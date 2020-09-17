import React from 'react';
import PropTypes from 'prop-types';

export const SuccessAlert = ({ title, body }) => {
  return (
    <div>
      <div role="alert" className="m-4">
        <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
          {title}
        </div>
        <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

SuccessAlert.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
