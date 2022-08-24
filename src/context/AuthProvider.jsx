import { createContext, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  setDoc,
  doc,
  where,
  getDocs,
  collection,
  query,
  addDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(false);

  const logIn = async (users) => {
    const auth = getAuth();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        users.email,
        users.password
      );
      if (user) {
        const token = await user.user.getIdToken();
        UserlocalStorage(token);
        navigate("/Dashboard");
      }
    } catch (error) {
      Swal.fire("Verifica tu correo o contraseña");
    }
  };

  const newUsers = async (user) => {
    const auth = getAuth();
    try {
      const userResult = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const id = userResult.user.uid;
      registerUser(user, id);
    } catch (error) {
      //console.log("error");
    }
  };

  const registerUser = async (user, id) => {
    try {
      const userReference = doc(db, "users", id);
      await setDoc(userReference, {
        name: user.name,
        email: user.email,
        password: user.password,
        id: id,
      });
      await Swal.fire("Registro exitoso");
    } catch (error) {
      console.log(error);
    }
  };
  const UserlocalStorage = (token) => {
    localStorage.setItem("token", token);
  };
  const logout = () => {
    Swal.fire({
      title: "¿Estas seguro de salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/Login");
      }
    });
  };

  const newPassword = async (data) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, data.email);
      await Swal.fire("Correo enviado");
    } catch (error) {
      await Swal.fire("Verifica tu correo");
    }
  };

  return (
    <AuthContex.Provider value={{ newUsers, logIn, logout, newPassword }}>
      {children}
    </AuthContex.Provider>
  );
};

export { AuthProvider };

export default AuthContex;
