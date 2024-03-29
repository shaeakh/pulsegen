import React from "react";

export default function Menu() {
  return (
    <div>
      <ul className="menu bg-base-200 w-full rounded-box">
        <li>
          <details open>
            <summary className="font-bold text-xl">C/C</summary>
            <ul>
              <li>
                <a>Point 1</a>
              </li>
              <li>
                <a>Point 1</a>
              </li>
              <li>
                <a>Point 1</a>
              </li>
            </ul>
          </details>
          <details open>
            <summary className="font-bold text-xl">Past History</summary>
            <ul>
              <li>
                <a>Point 1</a>
              </li>
              <li>
                <a>Point 1</a>
              </li>
              <li>
                <a>Point 1</a>
              </li>
            </ul>
          </details>
          <details open>
            <summary className="font-bold text-xl">Travel History</summary>
            <ul>
              <li>
                <a>Point 1</a>
              </li>
              <li>
                <a>Point 1</a>
              </li>
              <li>
                <a>Point 1</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
