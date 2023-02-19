import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MagnifyPic from "./MagnifyPic";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MagnifyPic picUrl="https://img2.baidu.com/it/u=345670089,3951600800&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
  </StrictMode>
);
