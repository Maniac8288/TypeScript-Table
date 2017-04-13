define(["require", "exports", "user/components/table/index", "user/Models/UsersModels"], function (require, exports, Table, UserModels) {
    "use strict";
    var Component;
    (function (Component) {
        var UserTableAdd = (function () {
            function UserTableAdd() {
                this.User = new UserModels.Models.UserModel();
            }
            /**
           * Добавление пользователя
           * @param user Модель таблицы
           */
            UserTableAdd.prototype.addUser = function () {
                var data = { FirstName: this.User.FirstName(), LastName: this.User.LastName() };
                console.log("Current add user ", data, this.User.FirstName(), this.User.LastName());
                $.ajax({
                    url: ConstAddUser,
                    type: 'post',
                    data: data,
                    success: function (data) {
                        console.log(data);
                        Table.Component.Table.prototype.Items.push(data);
                    },
                    error: function () {
                        console.log(data);
                    }
                });
                this.User.FirstName("");
                this.User.LastName("");
            };
            ;
            return UserTableAdd;
        }());
        Component.UserTableAdd = UserTableAdd;
    })(Component = exports.Component || (exports.Component = {}));
    // return the 'class' which is the constructor function
    //return ClickToEditViewModel;
    /**
     * Url добавления студента
     */
    var ConstAddUser = "/home/AddUsers";
});
//# sourceMappingURL=index.js.map