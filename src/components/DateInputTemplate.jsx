import React, { useState, useLayoutEffect } from "react";

const DateInputTemplate = ({ onChange, value, className }) => {
  return (
    <input
      type="date"
      name="date"
      min="2010-01-11"
      max="2011-06-05"
      className={`text-center dark:text-gray-200 text-xl mb-12 mt-3 bg-pink-500 rounded-full px-4 py-0.5 ${className}`}
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default DateInputTemplate;
