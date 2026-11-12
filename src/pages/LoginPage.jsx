import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.js"; // adjust path if your firebase.js is in another folder (e.g. ../lib/firebase.js)
import { useAuth } from "../hooks/useAuth.js";
import { authErrorMessage } from "../authErrors.js";

function LoginPage() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const goTo = location.state?.from ?? "/"; // where the guest was going

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [resetMessage, setResetMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setResetMessage("");
    setBusy(true);
    try {
      await login(email, password); // TODO 3
      navigate(goTo, { replace: true });
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setError("");
    setResetMessage("");
    try {
      await loginWithGoogle(); // TODO 4
      navigate(goTo, { replace: true });
    } catch (err) {
      setError(authErrorMessage(err));
    }
  }

  async function handleForgotPassword() {
    setError("");
    setResetMessage("");

    if (!email.trim()) {
      setError("Please enter your email above first to reset your password.");
      return;
    }

    setBusy(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setResetMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="card form" onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="field-error" role="alert">
            {error}
          </p>
        )}

        {resetMessage && (
          <p className="field-success" role="status" style={{ color: "green" }}>
            {resetMessage}
          </p>
        )}

        <button type="submit" className="btn" disabled={busy}>
          {busy ? "Logging in…" : "Log in"}
        </button>

        <button
          type="button"
          className="btn btn-outline"
          onClick={handleGoogle}
          disabled={busy}
        >
          Continue with Google
        </button>

        <p className="muted">
          <button
            type="button"
            className="link-btn"
            onClick={handleForgotPassword}
            disabled={busy}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "inherit",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot password?
          </button>
        </p>

        <p className="muted">
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
