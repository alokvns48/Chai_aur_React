import { configureStore } from "@reduxjs/toolkit"; // Step 1

import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  // step 2
  reducer: todoReducer,
});

// step 3 -> create slice , for this we require name , initial state and reducer

// step 4 -> in reducer create key function pair

// step 5 -> export all the reducers and main source reducer

// step 6 -> useDispatch to send value to the reducer

// step 7 -> useSelector to get value for the store

// step 8 -> use Provider with store value to wrap App or main file
