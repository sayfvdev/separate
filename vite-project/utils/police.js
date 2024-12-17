const token = localStorage.getItem('user')

if (!token) {
    location.assign('/pages/signin/')
}