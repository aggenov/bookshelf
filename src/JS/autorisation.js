export const USER_KEY = 'USER_KEY';
const starData = localStorage.getItem(USER_KEY);
export const parsData = JSON.parse(starData);
console.log('parsData:', parsData);

export function getUserData() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

export function clearUserData() {
  localStorage.removeItem(USER_KEY);
}
