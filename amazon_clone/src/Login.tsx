import styles from "./Login.module.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";


function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  function signIn(e: React.MouseEvent) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(
      (auth)=>{
        if(auth){
          navigate("/")
        }
      }
    )

  }

  function register(e: React.MouseEvent) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/")
      }
      console.log(auth);
    }).catch(error => alert(error.message))
  }

  return <div className={styles.login}>
    <Link to="/">
      <img className={styles.logo} src="https://pngimg.com/uploads/amazon/amazon_PNG12.png" />
    </Link>

    <div className={styles.login_container}>
      <h1>로그인</h1>
      <form>
        <h5>이메일</h5>
        <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }} type="text" />
        <h5>비밀번호</h5>
        <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }} type="password" />

        <button onClick={signIn} className={styles.login_btn}>로그인하기</button>
      </form>

      <p>이용 약관에 동의하십니까</p>

      <button onClick={register} className={styles.register_btn}>회원가입</button>

    </div>

  </div>
}

export default Login;