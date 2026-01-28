export function handleLogin(formData: any) {
    const user = localStorage.getItem('user');
    if(!user) {
        localStorage.setItem("user", JSON.stringify(formData));
        return;
    }
    console.log("a user already exists 👺👺👺👺👺👺👺👺👺👺")
    return;
}