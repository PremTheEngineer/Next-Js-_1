export function useGetUsername(user: string) {
    const userObject = JSON.parse(user);
    return userObject?.username;
}