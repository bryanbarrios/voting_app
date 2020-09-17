import React from 'react';
import PropTypes from 'prop-types';

export const WarningAlert = ({ title, body }) => {
  return (
    <div>
      <div role="alert" className="m-4">
        <div className="bg-orange-500 text-white font-bold rounded-t px-4 py-2">
          {title}
        </div>
        <div className="border border-t-0 border-orange-400 rounded-b bg-orange-100 px-4 py-3 text-orange-700">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

WarningAlert.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
