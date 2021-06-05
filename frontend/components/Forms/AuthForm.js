import { useAuth} from '../../hooks/useAuth'

const AuthForm = (props) => {

    const { formType} = props
     const [error, setError, handleLogin, email,
          setEmail, password, setPassword] = useAuth()

    return (
         <>
         {error && <span> {error.message}</span>}
            <form onSubmit={handleLogin}>
            <input
              className=""
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              placeholder="Email Address"
            />
            <input
              className=""
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
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
