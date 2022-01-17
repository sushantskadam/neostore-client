import axios from "axios";
import { MAIN_URL } from "./Url";
let token = localStorage.getItem("_token");
export function getUsers() {
  return axios.get(`${MAIN_URL}users`);
}
export function getUser(email) {
  return axios.get(`${MAIN_URL}profile/${email}`, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function getCustAddress(email) {
  return axios.get(`${MAIN_URL}getCustAddress/${email}`, {
    headers: { authorization: `Bearer ${token}` },
  });
}
// export function getAddr(email){
//     return axios.get(`${MAIN_URL}getAddr/${email}`,data,{
//                 headers:{"authorization": `Bearer ${token}`}
//             })
// }
export function updateUser(data) {
  return axios.put(`${MAIN_URL}profile`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function updateImg(data, config) {
  return axios.put(`${MAIN_URL}updateimg`, data, config, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function addAddress(data, email) {
  return axios.put(`${MAIN_URL}addaddress/${email}`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function updateAddr(data, email) {
  return axios.put(`${MAIN_URL}updateAddr/${email}`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function deleteAddr(email, data) {
  return axios.put(`${MAIN_URL}deleteAdd/${email}`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}

// export function getPizzaData(){
//     return axios.get(`${MAIN_URL}pizzadata`,{
//         headers:{"authorization": `Bearer ${token}`}
//     })
// }
export function getProducts() {
  return axios.get(`${MAIN_URL}getproducts`);
}
export function getProduct(id) {
  return axios.get(`${MAIN_URL}getproduct/${id}`);
}
export function getCategory() {
  return axios.get(`${MAIN_URL}getcategory`);
}
export function getColors() {
  return axios.get(`${MAIN_URL}getcolors`);
}
export function addSignup(data) {
  return axios.post(`${MAIN_URL}signup`, data);
}
export function SocLogin(data) {
  return axios.post(`${MAIN_URL}soclogin`, data);
}
export function addCart(data) {
  return axios.post(`${MAIN_URL}addcart`, data);
}
export function getCartd(email) {
  return axios.get(`${MAIN_URL}getcart/${email}`);
}
export function delCart(email) {
  // console.log(id)
  return axios.delete(`${MAIN_URL}delcartitem/${email}`, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function updCart(id, data) {
  // console.log(id)
  return axios.put(`${MAIN_URL}updcart/${id}`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function sendMailotp(data) {
  return axios.post(`${MAIN_URL}sendmailotp`, data);
}
// export function getCompdata(data){
//     return axios.post(`${MAIN_URL}getcompdata`)
// }
export function login(data) {
  return axios.post(`${MAIN_URL}login`, data);
}
// export function checkoutOrder(data){
//     return axios.post(`${MAIN_URL}checkout`, data)
// }
// export function deleteUser(index){
//     return axios.delete(`${MAIN_URL}deleteuser/${index}`)
// }
export function changePassword(data) {
  return axios.put(`${MAIN_URL}changepassword`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function updatePassword(data) {
  return axios.put(`${MAIN_URL}updatepassword`, data);
}
export function checkoutOrder(data) {
  return axios.post(`${MAIN_URL}addProductToCartCheckout`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function getOrderDetails(email) {
  return axios.get(`${MAIN_URL}getOrderDetails/${email}`, {
    headers: { authorization: `Bearer ${token}` },
  });
}
