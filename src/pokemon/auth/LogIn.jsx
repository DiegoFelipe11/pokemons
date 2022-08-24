import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
const LogIn = () => {
  const { logIn } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingresa un email valido!")
        .required("Campo requerido!"),
      password: Yup.string().required("Campo requerido!"),
    }),
    onSubmit: (values) => {
      logIn(values);
    },
  });

  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">
        Inicia sesion y captura tus{" "}
        <span className="text-slate-700">Pokemones </span>
      </h1>
      <form
        className="bg-white my-5 shadow-2xl rounded px-10 py-5"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block font-bold"
          >
            Clave
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="my-2">
          <Button
            type={"submit"}
            classname={
              "w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            }
            text={"Ingresar"}
          />
        </div>
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/Register"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿No tienes cuenta? Registrate
        </Link>
        <Link
          to="/PasswordRecovery"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Olvide mi clave
        </Link>
      </nav>
    </>
  );
};

export default LogIn;
