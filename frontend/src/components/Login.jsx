import { useEffect, useState } from "react";
import API_URL from "../api";
import "../App.css";

function Login({ onLoginSuccess }) {

    console.log("LOGIN COMPONENT CARREGADO");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function getCSRFToken() {
        const response = await fetch(`${API_URL}/api/csrf/`, {
            credentials: "include",
        });

        const data = await response.json();

        return data.csrfToken;
    }

    useEffect(() => {
        getCSRFToken();
    }, []);


   async function handleLogin(event) {

        event.preventDefault();

        setError("");
        setLoading(true);

        console.log("1 - começando login");
        const csrfToken = await getCSRFToken();

        console.log("2 - CSRF recebido:", csrfToken);
        const response = await fetch(`${API_URL}/api/login/`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        console.log("3 - resposta do login:", response.status);
        const data = await response.json();

        if (!response.ok) {
            setError(data.error || "Erro ao fazer login.");
            setLoading(false);
            return;
        }

        onLoginSuccess();
        setLoading(false);
    }

    return (
    
        <div className="login-page">

            <div className="login-card">

                <div className="login-header">
                    <span className="login-eyebrow">
                        FINANCE
                    </span>

                    <h1>
                        Entrar
                    </h1>

                    <p>
                        Acesse sua conta para continuar
                    </p>
                </div>

                {error && (
                    <div className="login-error">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>

                    <div className="login-field">
                        <label>
                            Usuário
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            autoComplete="username"
                        />
                    </div>

                    <div className="login-field">
                        <label>
                            Senha
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="current-password"
                        />
                    </div>

                    <button
                        className="login-button"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;