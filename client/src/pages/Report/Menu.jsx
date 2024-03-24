import React from 'react'

export default function Menu() {
  return (
    <div>
      <ul className="menu bg-base-200 w-full rounded-box">
  <li><a>item</a></li>
  <li>
    <details open>
      <summary>CC</summary>
      <ul>
        <li><a>Point 1</a></li>
        <li><a>Point 1</a></li>
        <li><a>Point 1</a></li>
      </ul>
    </details>
    <details open>
      <summary>Past History</summary>
      <ul>
        <li><a>Point 1</a></li>
        <li><a>Point 1</a></li>
        <li><a>Point 1</a></li>
      </ul>
    </details>
    <details open>
      <summary>Travel History</summary>
      <ul>
        <li><a>Point 1</a></li>
        <li><a>Point 1</a></li>
        <li><a>Point 1</a></li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</ul>
    </div>
  )
}
