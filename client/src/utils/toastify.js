import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const warning = (text, pos) => {
    toast.warn(text, {
        position: pos == undefined ? "top-right" : pos,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
}

export const wrong = (text, pos) => {
    toast.error(text, {
        position: pos == undefined ? "top-right" : pos,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
}

export const success = (text, pos) => {
    toast.success(text, {
        position: pos == undefined ? "top-right" : pos,
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
}

export const info = (text, pos) => {
    toast.info(text, {
        position: pos == undefined ? "top-right" : pos,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
}

export const simple = (text, pos) => {
    toast("🦄 " + text, {
        position: pos == undefined ? "top-right" : pos,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
}

