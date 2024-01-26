import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { TokenData } from "@/app/interfaces/TokenData"

export interface AuthSliceState {
  user: User | null
  tokenData: TokenData | null
}

const initialState: AuthSliceState = {
  user: null,
  tokenData: null,
}

export const authSliceSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    resetAuthSliceState: (state) => {
      state = initialState
      return state
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    setTokenData: (state, action: PayloadAction<TokenData | null>) => {
      state.tokenData = action.payload
    },
  },
})

export const { resetAuthSliceState, setUser, setTokenData } =
  authSliceSlice.actions

export default authSliceSlice.reducer
