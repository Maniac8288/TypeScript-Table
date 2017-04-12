define(["require", "exports", "knockout", 'user/components/Pagination/index'], function (require, exports, ko, Pagination) {
    "use strict";
    var Component;
    (function (Component) {
        var Table = (function () {
            function Table() {
                //Инцилизация колекции таблицы
                this.Items = ko.observableArray([]);
                this.getCollection();
                this.Page = new Pagination.Component.Pagination(this.Items);
                // Сортировка таблицы
                Table.sortType = "ascending";
                this.iconType = ko.observable("");
                var _this = this;
                this.currentColumn = ko.observable("");
                this.readonlyTemplate = ko.observable("readonlyTemplate");
                this.editTemplate = ko.observable();
                this.currentTemplate = function (tmpl) {
                    return tmpl === _this.editTemplate() ? 'editTemplate' : _this.readonlyTemplate();
                };
                // Сброс шаблона на обычный
                Table.resetTemplate = function (t) {
                    _this.editTemplate("readonlyTemplate");
                };
            }
            /**
            * Загрузка коллекции с сервера
            */
            Table.prototype.getCollection = function () {
                $.getJSON(GetUser, function (data) {
                    this.Items = data;
                    console.log(this.Items);
                });
            };
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
                this.iconType((Table.sortType == "ascending") ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down");
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
});
//# sourceMappingURL=index.js.map