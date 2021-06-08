
const AuthForm = (props) => {

  const {
    methods, formType } = props




  const handleSubmit = (event) => {
    event.preventDefault()

    if (formType === "Register") {
      console.log("register")
      methods.registerUser(methods.email, methods.password)
    } else if (formType === "Login") {
    
      methods.loginUser(methods.email, methods.password)
    }
  }

  return (
    <>
      {methods.error && <span> {methods.error.message}</span>}
      <form onSubmit={handleSubmit}>
        <input
          className=""
          type="email"
          value={methods.email}
          onChange={(event) => {
            methods.setEmail(event.target.value);
            methods.setError("");
          }}
          placeholder="Email"
        />
        <input
          className=""
          type="password"
          value={methods.password}
          onChange={(event) => {
            methods.setPassword(event.target.value);
            methods.setError("");
          }}
          placeholder="Password"
        />
        <button type="submit" className="">
          {formType}
        </button>
      </form>
    </>
  )

}

export default AuthForm
