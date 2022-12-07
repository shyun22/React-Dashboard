import React from "react";

const Main = () => {
  return (
    <div className="mt-24">
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
          </div>
          <div className="md:w-full overflow-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
