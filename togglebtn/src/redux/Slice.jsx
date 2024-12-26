import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// create thunk function for call api
export const createUser = createAsyncThunk(
  // name of the function
  'createUser',
  // call api it gate user state from createPage in data and send it in reducer
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    // call api in response function
   
    try {
      const response = await fetch('https://657f21799d10ccb465d60542.mockapi.io/redux-crud',
      // object for post method
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }
    );
    // response function end
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue({ errorMessage: "Failed to create user. Please try again.", originalError: error });
    }
  }

)
// thunk function end

// thunk function for show user details in read page
export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    const response = await fetch("https://657f21799d10ccb465d60542.mockapi.io/redux-crud");

    try {
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return rejectWithValue({ errorMessage: "Failed to fetch user data. Please try again.", originalError: error });
    }
  }
);
// slice function start
export const userDetail = createSlice({
  
  // name of slice
  name: 'userDetail',
  // initial state for data
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  // reducers for send the data in store
  reducers: {
    // loading state true when data in pending state
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    // when data is resolved
    [createUser.fulfilled]: (state, action) => {
      // loading state will be false
      state.loading = false;
      // data goes in users state
      state.users.push(action.payload);

    },
    // when data is rejected
    [createUser.rejected]: (state, action) => {
      // loading state will be false
      state.loading = false;
      // show error msg
      state.error = action.payload.massage;
    },
// create user reducer end

    // show user data on page by using reducer, it send data in store
    [showUser.pending]: (state) => {
      state.loading = true;
      state.error = null; // Clear the previous error on pending
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.errorMessage;
    },
  },

})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

// export default counterSlice.reducer
export default userDetail.reducer
