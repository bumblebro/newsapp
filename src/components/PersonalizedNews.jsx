import { useState } from "react";
import Dropdown from "./Dropdown";
import { authors } from "../utils/Authors";
import { categories } from "../utils/Categories";
import { sources } from "../utils/Sources";

function PersonalizedNews({ setSettings }) {
  return (
    <div className="h-[100vh]">
      <button
        className="mt-4 text-2xl font-bold text-red-600 focus:outline-none"
        onClick={() => {
          setSettings((prev) => !prev);
        }}
      >
        X
      </button>
      <div className="max-w-[800px] mx-auto mt-12 bg-gray-100 p-2 rounded-lg shadow-md sm:p-6">
        <div className="flex flex-col items-center justify-between gap-4 mb-6 sm:flex-row">
          <label
            htmlFor="sources"
            className="w-full text-lg font-semibold text-gray-700  sm:w-[20%]"
          >
            Sources
          </label>
          <Dropdown
            options={sources}
            type={"Sources"}
            className="w-full sm:w-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 mb-6 sm:flex-row">
          <label
            htmlFor="authors"
            className="w-full text-lg font-semibold text-gray-700 sm:w-[20%]"
          >
            Authors
          </label>
          <Dropdown
            options={authors}
            type={"Authors"}
            className="w-full sm:w-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 mb-6 sm:flex-row">
          <label
            htmlFor="categories"
            className="w-full text-lg font-semibold text-gray-700 sm:w-[20%]"
          >
            Categories
          </label>
          <Dropdown
            options={categories}
            type={"Categories"}
            className="w-full sm:w-auto"
          />
        </div>
        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <button
            className="w-full px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md sm:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => {
              setSettings((prev) => !prev);
            }}
          >
            Set Preference
          </button>
          <button
            className="w-full px-6 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md sm:w-auto hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => {
              localStorage.clear();
              setSettings((prev) => !prev);
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedNews;
