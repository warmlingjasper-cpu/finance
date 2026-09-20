import { useEffect, useState } from "react";
import API_URL from "../api";
import "../App.css";

function Login({ onLoginSuccess }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function getCSRFToken() {
        const response = await fetch(`${API_URL}/csrf/`, {
            credentials: "include",
        });

        const data = await response.json();

        // Safari/iPhone pode não guardar automaticamente
        // o cookie CSRF enviado pelo Django.
        document.cookie = `csrftoken=${data.csrfToken}; Path=/; Secure; SameSite=Lax`;

        return data.csrfToken;
    }

    useEffect(() => {
        getCSRFToken();
    }, []);


    async function handleLogin(event) {

        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const csrfToken = await getCSRFToken();

            const response = await fetch(`${API_URL}/login/`, {
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

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Erro ao fazer login.");
                setLoading(false);
                return;
            }

            onLoginSuccess();

        } catch (error) {
            setError("Erro de conexão com o servidor.");
            setLoading(false);
        }
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