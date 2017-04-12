
﻿import ko = require("knockout");
import Users = require('user/components/add/index');
import Pagination = require('user/components/Pagination/index');
import UserModel = require('user/Models/UsersModels');
export namespace Component {
    export class Table {
    
        public Items: KnockoutObservableArray<UserModel.Models.UserModel>;
        public Page: Pagination.Component.Pagination; 
        //iconType: KnockoutObservable<string>;
        //static sortType: string;
        //readonlyTemplate: KnockoutObservable<any>;
        //editTemplate: KnockoutObservable<any>;
        //currentTemplate: any;
        //static resetTemplate: any;
        //currentColumn: KnockoutObservable<string>;
        constructor() {
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
        getCollection(): void {
            var self = this;
            $.getJSON(GetUser, function (data) {
                self.Items.push(new UserModel.Models.UserModel(2, "ss", "ss"));
                console.log('getJSON',self.Page.CurrentPage())
                
            });  
        }
        /**
         * Сортировка таблицы
         * @param users Пользователь
         * @param e Jqvery.Event
         */
        //sortTable(users: KnockoutObservableArray<Users.Component.UserTableAdd>, e): void {
        //    var orderProp = $(e.target).attr("data-column")
        //    this.currentColumn(orderProp);
        //    this.Items.sort(function (left, right) {
        //        var leftVal = left[orderProp];
        //        var rightVal = right[orderProp];
        //        if (Table.sortType == "ascending") {
        //            return leftVal < rightVal ? 1 : -1;
        //        }
        //        else {
        //            return leftVal > rightVal ? 1 : -1;
        //        }
        //    });
        //    // Смена иконки
        //    Table.sortType = (Table.sortType == "ascending") ? "descending" : "ascending";
        //    this.iconType((Table.sortType == "ascending") ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down");
        //};
    }
}
// return the 'class' which is the constructor function
//return ClickToEditViewModel;
/**
 * Url добавления студента
 */
const ConstAddUser = "/home/AddUsers";
const GetUser = '/home/GetUsers';