import React from "react";

function SearchIcon({className, onClick}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path
        fill="#9F9F9F"
        fillRule="evenodd"
        d="M11.69 4c4.24 0 7.688 3.373 7.688 7.52 0 1.955-.768 3.74-2.024 5.079l2.472 2.412a.57.57 0 010 .818.6.6 0 01-.838.002l-2.5-2.44a7.76 7.76 0 01-4.799 1.648C7.45 19.039 4 15.665 4 11.519 4 7.373 7.45 4 11.69 4zm0 1.158c-3.587 0-6.506 2.853-6.506 6.361 0 3.508 2.919 6.362 6.505 6.362 3.587 0 6.505-2.854 6.505-6.362s-2.918-6.36-6.505-6.36z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SearchIcon;
