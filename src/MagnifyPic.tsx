import "./styles.css";
import React, { useState, useEffect } from "react";

// 监听位置的钩子
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({ x: e.pageX * 1, y: e.pageY * 1 });
    };
    document.addEventListener("mousemove", updateMouse);
    return () => {
      document.removeEventListener("mousemove", updateMouse);
    };
  });
  return position;
};

// 划过图片放大，点击放更大
const MagnifyPic = ({ picUrl }) => {
  return (
    <div
      id="page"
      style={{
        background: `url( ${picUrl}) center center no-repeat `
      }}
    >
      <span
        id="magnify"
        style={{
          background: `url( ${picUrl}) center center no-repeat `,
          top: `${useMousePosition().y}px`,
          left: `${useMousePosition().x}px`
        }}
      ></span>
    </div>
  );
};

export default MagnifyPic;
