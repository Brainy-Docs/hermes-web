import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("gwladystone1erdunom@gmail.com");
  const [password, setPassword] = useState("admin");

  const onSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/manage/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = "/manage";
    } else {
      alert(data.message);
    }
    setLoading(false);
  };

  return (
    <section className="py-16 xl:pb-56 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-md mx-auto">
          <a className="mb-36 inline-block" href="#">
            <img src="/appicon.svg" alt="" />
          </a>
          <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">
            Bienvenue
          </h2>
          <p className="mb-12 font-medium text-lg text-gray-600 leading-normal">
            Veuillez entrer vos pour vous connecter et gérer votre restaurant.
          </p>
          <form>
            <label className="block mb-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-orange-300"
                type="email"
                placeholder="Adresse email/ Nom d'utilisateur"
              />
            </label>
            <label className="relative block mb-5">
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <a
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                  href="#"
                >
                  Mot de passe oublié?
                </a>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 pr-36 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-orange-300"
                type="password"
                placeholder="Mot de passe"
              />
            </label>
            <button
              onClick={onSubmit}
              className="mb-8 py-4 px-9 w-full text-white font-semibold border border-orange-700 rounded-xl shadow-4xl focus:ring focus:ring-orange-300 bg-orange-600 hover:bg-orange-700 transition ease-in-out duration-200"
              type="button"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin mx-auto h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                  ></path>
                </svg>
              ) : (
                "Se connecter"
              )}
            </button>
            <p className="font-medium">
              <span>Votre restaurant n&apos;est pas enrégistré?</span>
              <a
                className="text-orange-600 hover:text-orange-700"
                href="mailto:hermes@gmail.com"
              >
                {" "}
                Contactez-nous
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
