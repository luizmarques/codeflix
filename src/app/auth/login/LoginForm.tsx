"use client"
import { AuthForm } from "../../components/AuthForm";

export default function LoginForm() {
  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    alert( "submit" )
    e.preventDefault();
  }
  return <AuthForm formType="login" onSubmit={handleSubmit} />
}                                                                                                   