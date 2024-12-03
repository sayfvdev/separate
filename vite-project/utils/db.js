const res = await fetch("http://localhost:8080/users")
 export const users = await res.json()
 
 const res_wallets = await fetch("http://localhost:8080/wallets")
 export const wallets = await res_wallets.json()