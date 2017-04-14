define(["require", "exports", "knockout", 'user/components/Pagination/app'], function (require, exports, ko, Pagination) {
    "use strict";
    var Component;
    (function (Component) {
        var Table = (function () {
            function Table() {
                //Инцилизация колекции таблицы
                this.Items = ko.observableArray([]);
                this.Page = new Pagination.Component.Pagination(this.Items);
                this.getCollection();
                // Сортировка таблицы
                Table.sortType = "ascending";
                this.iconType = ko.observable("");
            }
            /**
            * Загрузка коллекции с сервера
            */
            Table.prototype.getCollection = function () {
                var self = this;
                $.getJSON(GetUser, function (data) {
                    self.Items(data);
                    console.log('getJSON', self.Page.CurrentPage());
                });
            };
            Table.prototype.removeUser = function (user) {
                $.ajax({
                    url: UrlDeleteUser + user.Id,
                    type: 'post',
                    contentType: 'application/json',
                    success: function (data) {
                    }
                });
            };
            ;
            return Table;
        }());
        Component.Table = Table;
    })(Component = exports.Component || (exports.Component = {}));
    // return the 'class' which is the constructor function
    //return ClickToEditViewModel;
    /**
     * Url добавления студента
     */
    var ConstAddUser = "/home/AddUsers";
    var GetUser = '/home/GetUsers';
    var UrlDeleteUser = '/home/DeleteUser/';
});
//# sourceMappingURL=app.js.map