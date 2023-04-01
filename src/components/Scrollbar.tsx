import React from "react";

export function Scrollbar() {
  return (
    <style>
      {`
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background-color: #f5f5f5;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: #999;
        }
      `}
    </style>
  );
}
