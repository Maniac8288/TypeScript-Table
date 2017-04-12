define(["require", "exports", "knockout", "components/user/table/index"], function (require, exports, ko, test) {
    "use strict";
    var Component;
    (function (Component) {
        var AddUser = (function () {
            function AddUser(id, firstName, lastName) {
                this.Id = ko.observable(id);
                this.FirstName = ko.observable(firstName);
                this.LastName = ko.observable(lastName);
            }
            /**
                    * Добавление пользователя
                    * @param user Модель таблицы
                    */
            AddUser.prototype.addUser = function (user) {
                var dataObject = ko.toJSON(user);
                $.ajax({
                    url: ConstAddUser,
                    type: 'post',
                    data: dataObject,
                    contentType: 'application/json',
                    success: function (data) {
                        console.log(dataObject);
                        user.FirstName('');
                        test.Component.ItemViewModel.Collection.push(data);
                    },
                    error: function () {
                        console.log(dataObject);
                    }
                });
            };
            ;
            return AddUser;
        }());
        Component.AddUser = AddUser;
    })(Component = exports.Component || (exports.Component = {}));
    // return the 'class' which is the constructor function
    //return ClickToEditViewModel;
    /**
     * Url добавления студента
     */
    var ConstAddUser = "/home/AddUsers";
});
//# sourceMappingURL=index.js.map