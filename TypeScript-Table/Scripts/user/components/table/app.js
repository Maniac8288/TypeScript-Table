define(["require", "exports", "knockout", 'user/components/Edit/app', 'user/components/Pagination/app'], function (require, exports, ko, Edit, Pagination) {
    "use strict";
    var GetUser = '/home/GetUsers';
    var UrlDeleteUser = '/home/DeleteUser/';
    var Component;
    (function (Component) {
        var Table = (function () {
            function Table() {
                this.Edit = new Edit.Component.EditUserTable(true);
                //Инцилизация колекции таблицы
                this.Items = ko.observableArray([]);
                this.Page = new Pagination.Component.Pagination(this.Items);
                this.getCollection();
                // Сортировка таблицы
                Table.sortType = "ascending";
                this.currentColumn = ko.observable("");
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
                        console.log();
                    }
                });
            };
            ;
            /**
             * Сортировка таблицы
             * @param users Пользователь
             * @param e Jqvery.Event
             */
            Table.prototype.sortTable = function (users, e) {
                var orderProp = $(e.target).attr("data-column");
                this.currentColumn(orderProp);
                this.Items.sort(function (left, right) {
                    var leftVal = left[orderProp];
                    var rightVal = right[orderProp];
                    if (Table.sortType == "ascending") {
                        return leftVal < rightVal ? 1 : -1;
                    }
                    else {
                        return leftVal > rightVal ? 1 : -1;
                    }
                });
                // Смена иконки
                Table.sortType = (Table.sortType == "ascending") ? "descending" : "ascending";
            };
            ;
            return Table;
        }());
        Component.Table = Table;
    })(Component = exports.Component || (exports.Component = {}));
});
//# sourceMappingURL=app.js.map