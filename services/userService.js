import ApiService from "./.apiService";

const UserService = () => {};

UserService.test = () => {
  ApiService.get("/blabla", true);
};
export default UserService;
