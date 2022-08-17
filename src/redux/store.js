import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";

import rootReducer from "./root-reducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REGISTER, REHYDRATE,PAUSE,PERSIST, PURGE],
            },
        }),
});

export const persistor = persistStore(store);

