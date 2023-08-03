import { useState } from "react";
import ToastContext from "./ToastService";
import { RxCross2 } from "react-icons/rx";

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState([]);
  const open = (component, timeout = 5000) => {
    const id = Date.now();
    setToast((toast) => [...toast, { id, component }]);

    setTimeout(() => close(id), timeout);
  };

  const close = (id) =>
    setToast((toast) => toast.filter((toast) => toast.id !== id));

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="space-y-2 absolute bottom-4 right-4 ml-[58rem] w-1/4">
        {toast.map(({ id, component }) => (
          <div key={id} className="relative">
            <button
              onClick={() => close(id)}
              className="absolute top-2 right-2 p-1 ml-72 rounded-lg bg-gray-200/20 text-gray-800/60"
            >
              <RxCross2 size={16} />
            </button>
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
