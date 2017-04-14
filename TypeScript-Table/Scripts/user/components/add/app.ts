/// <reference path="../../../typings/jquery/jquery.d.ts" />
/*
    click-to-edit component viewmodel file
    loaded for the click-to-edit viewmodel
 */
import ko = require("knockout");
import UserModels = require("user/Models/UsersModels");
export namespace Component {
    export class UserTableAdd {
        User: UserModels.Models.UserModel;
        
        constructor() {
            this.User = new UserModels.Models.UserModel();
        }
                 /**
                * Добавление пользователя
                * @param user Модель таблицы
                */
        addUser(): void {
         
            var data = { FirstName: this.User.FirstName(), LastName:this.User.LastName()};
           
            console.log("Current add user ", data, this.User.FirstName(), this.User.LastName());
            $.ajax({
                url: ConstAddUser,
                type: 'post',
                data: data,
                success: function (data) {
                    console.log(data);
                    
                },
                error: function () {
                    console.log(data);
                }
            });
            this.User.FirstName("");
            this.User.LastName("");
        };

    }
}
// return the 'class' which is the constructor function
//return ClickToEditViewModel;
/**
 * Url добавления студента
 */
const ConstAddUser = "/home/AddUsers";