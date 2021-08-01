import { observable, action } from "mobx";
class UserStore {
    @observable user = null;
    constructor(initialData = {}){
        this.user = initialData.post;
    }

    @action setPost = (post) => {
        this.post = post;
    }
}
export default UserStore;