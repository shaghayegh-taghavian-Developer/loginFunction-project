import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginFunction: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Login data:", formData);
    alert("Login successful!");
  };

  const handleGoogleLogin = (): void => {
    alert("Google login clicked");
  };

  const handleFacebookLogin = (): void => {
    alert("Facebook login clicked");
  };

  // style
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
    },
    card: {
      background: "white",
      borderRadius: "16px",
      padding: "40px",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "420px",
    },
    header: {
      textAlign: "center" as const,
      marginBottom: "30px",
    },
    headerH1: {
      fontSize: "28px",
      color: "#2d3748",
      marginBottom: "15px",
      fontWeight: "600",
    },
    divider: {
      height: "3px",
      background: "linear-gradient(90deg, #667eea, #764ba2)",
      borderRadius: "2px",
      width: "60px",
      margin: "0 auto",
    },
    form: {
      marginBottom: "25px",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      color: "#4a5568",
      fontWeight: "500",
      fontSize: "14px",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      border: "2px solid #e2e8f0",
      borderRadius: "10px",
      fontSize: "15px",
      background: "#fafafa",
    },
    formOptions: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "25px",
      fontSize: "14px",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      color: "#4a5568",
    },
    forgotLink: {
      color: "#667eea",
      textDecoration: "none",
      fontWeight: "500",
    },
    loginBtn: {
      width: "100%",
      padding: "14px",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },
    separator: {
      textAlign: "center" as const,
      margin: "25px 0",
      position: "relative" as const,
    },
    separatorLine: {
      position: "absolute" as const,
      top: "50%",
      left: "0",
      right: "0",
      height: "1px",
      background: "#e2e8f0",
    },
    separatorText: {
      background: "white",
      padding: "0 15px",
      color: "#718096",
      fontSize: "14px",
      position: "relative" as const,
      zIndex: 1,
    },
    socialButtons: {
      display: "flex",
      gap: "12px",
      marginBottom: "25px",
    },
    socialBtn: {
      flex: 1,
      padding: "12px",
      border: "2px solid #e2e8f0",
      borderRadius: "10px",
      background: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontSize: "14px",
      fontWeight: "500",
    },
    footer: {
      textAlign: "center" as const,
      paddingTop: "20px",
      borderTop: "1px solid #e2e8f0",
    },
    footerText: {
      color: "#718096",
      fontSize: "14px",
    },
    registerLink: {
      color: "#667eea",
      textDecoration: "none",
      fontWeight: "600",
      marginLeft: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/*header*/}
        <div style={styles.header}>
          <h1 style={styles.headerH1}>Login</h1>
          <div style={styles.divider}></div>
        </div>

        {/*form*/}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/*email*/}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>

          {/*password*/}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>

          {/*checkbox*/}
          <div style={styles.formOptions}>
            <label style={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>

            <a href="#forgot" style={styles.forgotLink}>
              Forgot password?
            </a>
          </div>

          {/*submit*/}
          <button type="submit" style={styles.loginBtn}>
            Sign in
          </button>
        </form>

        {/*seperator*/}
        <div style={styles.separator}>
          <div style={styles.separatorLine}></div>
          <span style={styles.separatorText}>or continue with</span>
        </div>

        {/*button*/}
        <div style={styles.socialButtons}>
          <button
            type="button"
            style={styles.socialBtn}
            onClick={handleGoogleLogin}
          >
            <span>🔍</span>
            Google
          </button>

          <button
            type="button"
            style={styles.socialBtn}
            onClick={handleFacebookLogin}
          >
            <span>👤</span>
            Facebook
          </button>
        </div>

        {/*footer*/}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Don't have account yet?
            <a href="#register" style={styles.registerLink}>
              {" "}
              Register for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFunction;
