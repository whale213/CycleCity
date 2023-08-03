import { createContext, useContext } from "react";

// context to access service anywhere in the app
const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);
export default ToastContext;
