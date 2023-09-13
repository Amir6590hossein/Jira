import { toast } from "react-toastify";

export const errorMessage = (message) => {
  toast.error(`${message}`, {
    autoClose: 5000,
    position: "top-right",
  });
};
export const successMessage = (message) => {
  toast.success(`${message}`, {
    autoClose: 5000,
    position: "top-right",
  });
};
