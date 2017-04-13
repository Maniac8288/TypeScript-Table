define(["require", "exports", "knockout", 'user/components/Pagination/index', 'user/Models/UsersModels'], function (require, exports, ko, Pagination, UserModel) {
    "use strict";
    var Component;
    (function (Component) {
        var Table = (function () {
            //iconType: KnockoutObservable<string>;
            //static sortType: string;
            //readonlyTemplate: KnockoutObservable<any>;
            //editTemplate: KnockoutObservable<any>;
            //currentTemplate: any;
            //static resetTemplate: any;
            //currentColumn: KnockoutObservable<string>;
            function Table() {
                //Инцилизация колекции таблицы
                this.Items = ko.observableArray([new UserModel.Models.UserModel(1, "ss", "ss")]);
                console.log('------- 1 -----');
                this.Page = new Pagination.Component.Pagination(this.Items);
                console.log('------- 2 -----');
                this.getCollection();
                //// Сортировка таблицы
                //Table.sortType = "ascending";
                //this.iconType = ko.observable("");
                //var _this = this;
                //this.currentColumn = ko.observable("");
                //this.readonlyTemplate = ko.observable("readonlyTemplate");
                //this.editTemplate = ko.observable();
                //this.currentTemplate = function (tmpl) {
                //    return tmpl === _this.editTemplate() ? 'editTemplate' : _this.readonlyTemplate();
                //};
                //// Сброс шаблона на обычный
                //Table.resetTemplate = function (t) {
                //    _this.editTemplate("readonlyTemplate");
                //};
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