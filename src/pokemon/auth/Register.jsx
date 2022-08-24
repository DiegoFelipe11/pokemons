import { Link } from "react-router-dom";
import Button from "../../components/shared/button";
import useAuth from "../../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
  const { newUsers } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Campo requerido!")
        .min(8, "Ingresa tu nombre completo!"),
      email: Yup.string()
        .email("Ingresa un email valido!")
        .required("Campo requerido!"),
      password: Yup.string().required("Campo requerido!"),
    }),
    onSubmit: (values, { resetForm }) => {
      newUsers(values);
      resetForm();
    },
  });
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">
        Crea tu cuenta y captura tus{" "}
        <span className="text-slate-700">Pokemones </span>
      </h1>
      <form
        className="bg-white my-3 shadow-2xl rounded px-10 py-5"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="my-3">
          <label
            htmlFor="name"
            className="uppercase text-gray-600 block font-bold"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="my-3">
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
            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="my-3">
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
            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
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
            text={"Registrarse"}
          />
        </div>
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/Login"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿Ya tienes cuenta? Inicia sesion
        </Link>
        <Link
          to="singUp"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Olvide mi clave
        </Link>
      </nav>
    </>
  );
};

export default Register;
