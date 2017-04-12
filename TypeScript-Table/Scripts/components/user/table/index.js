define(["require", "exports", "knockout", 'components/user/add/index'], function (require, exports, ko, Users) {
    "use strict";
    var GetUser = '/home/GetUsers';
    var Component;
    (function (Component) {
        var ItemViewModel = (function () {
            function ItemViewModel() {
                //следующая страница
                this.nextPage = function () {
                    if (((this.currentPageIndex() + 1) * this.pageSize) < ItemViewModel.Collection().length) {
                        this.currentPageIndex(this.currentPageIndex() + 1);
                    }
                    else {
                        this.currentPageIndex(0);
                    }
                };
                //предыдущая страница
                this.previousPage = function () {
                    if (this.currentPageIndex() > 0) {
                        this.currentPageIndex(this.currentPageIndex() - 1);
                    }
                    else {
                        this.currentPageIndex((Math.ceil(ItemViewModel.Collection().length / this.pageSize)) - 1);
                    }
                };
                ItemViewModel.testTable = ko.observableArray([]);
                //Инцилизация пагинации
                this.currentPage = ko.observableArray([]);
                this.pageSize = ko.observable('5');
                this.currentPageIndex = ko.observable(0);
                //Инцилизация колекции таблицы
                ItemViewModel.Collection = ko.observableArray([]);
                this.getCollection();
                // Сортировка таблицы
                ItemViewModel.sortType = "ascending";
                this.iconType = ko.observable("");
                var _this = this;
                this.currentColumn = ko.observable("");
                this.readonlyTemplate = ko.observable("readonlyTemplate");
                this.editTemplate = ko.observable();
                this.currentPage = ko.computed(function () {
                    var pagesize = parseInt(_this.pageSize().toString(), 10), startIndex = pagesize * _this.currentPageIndex(), endIndex = startIndex + pagesize;
                    return ItemViewModel.Collection.slice(startIndex, endIndex);
                });
                this.currentTemplate = function (tmpl) {
                    return tmpl === _this.editTemplate() ? 'editTemplate' : _this.readonlyTemplate();
                };
                // Сброс шаблона на обычный
                ItemViewModel.resetTemplate = function (t) {
                    _this.editTemplate("readonlyTemplate");
                };
            }
            /**
            * Загрузка коллекции с сервера
            */
            ItemViewModel.prototype.getCollection = function () {
                $.getJSON(GetUser, function (data) {
                    ItemViewModel.Collection(data);
                    var serverData;
                    serverData = JSON.parse($("#serverJSON").val());
                    for (var i = 0; i < serverData.length; i++) {
                        var User;
                        User = serverData[i];
                        ItemViewModel.testTable.push(new Users.Component.AddUser(User.Id, User.FirstName, User.LastName));
                    }
                });
            };
            ItemViewModel.prototype.test = function () {
            };
            /**
             * Сортировка таблицы
             * @param users Пользователь
             * @param e Jqvery.Event
             */
            ItemViewModel.prototype.sortTable = function (users, e) {
                var orderProp = $(e.target).attr("data-column");
                this.currentColumn(orderProp);
                ItemViewModel.Collection.sort(function (left, right) {
                    var leftVal = left[orderProp];
                    var rightVal = right[orderProp];
                    if (ItemViewModel.sortType == "ascending") {
                        return leftVal < rightVal ? 1 : -1;
                    }
                    else {
                        return leftVal > rightVal ? 1 : -1;
                    }
                });
                // Смена иконки
                ItemViewModel.sortType = (ItemViewModel.sortType == "ascending") ? "descending" : "ascending";
                this.iconType((ItemViewModel.sortType == "ascending") ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down");
            };
            ;
            return ItemViewModel;
        }());
        Component.ItemViewModel = ItemViewModel;
    })(Component = exports.Component || (exports.Component = {}));
    // return the 'class' which is the constructor function
    //return ClickToEditViewModel;
    /**
     * Url добавления студента
     */
    var ConstAddUser = "/home/AddUsers";
});
//# sourceMappingURL=index.js.map