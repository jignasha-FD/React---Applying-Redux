import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "../Features/Slice1";

  export const store = configureStore({
    reducer:
    {
      changeKey:Slice1
    }
  })