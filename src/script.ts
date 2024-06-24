import { get } from "mongoose";
import { User } from "./model/User";
import { UserForm } from "./views/UserForm";
import { UserAge } from "./views/UserAge";


const user = User.buildUser({id:"9f17", name: "rona", age:34})
const userCollection = User.buildCollection();





const root = document.getElementById("root")
if(root) {
    const userForm = new UserForm(root, user)
    userForm.render()
}





