﻿
﻿import ko = require("knockout");
import Users = require('user/components/add/app');
import Pagination = require('user/components/Pagination/app');
import UserModel = require('user/Models/UsersModels');

export namespace Component {
    export class Table {
        public Items: KnockoutObservableArray<UserModel.Models.UserModel>;
        public Page: Pagination.Component.Pagination;
        iconType: KnockoutObservable<string>;
        static sortType: string;
        currentColumn: KnockoutObservable<string>;
        constructor() {
         
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
        getCollection(): void {
            var self = this;
            $.getJSON(GetUser, function (data) {
                self.Items(data);
                console.log('getJSON',self.Page.CurrentPage())
                
            });  
        }
    
        removeUser(user: any): void {
            
            $.ajax({
                url: UrlDeleteUser + user.Id,
                type: 'post',
                contentType: 'application/json',
                success: function (data) {
                     
                }
            });
        };
        



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
const UrlDeleteUser = '/home/DeleteUser/';