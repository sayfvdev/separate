const res = await fetch("http://localhost:8080/users")
 export const users = await res.json()