﻿﻿import ko = require("knockout");
import Table = require('user/components/table/index');
export namespace Component {
    /**
     * Пагинация таблицы
     */
    export class Pagination {
        CurrentPage: any;
        PageSize: KnockoutObservable<string>;
        CurrentPageIndex: KnockoutObservable<number>;
        Items: KnockoutObservableArray<any>;
            constructor(items: KnockoutObservableArray<any>) {
            this.Items = ko.observableArray([items]);
            this.CurrentPage = ko.observableArray([]);
            this.PageSize = ko.observable('5');
            this.CurrentPageIndex = ko.observable(0);
            var self = this;
            this.CurrentPage = ko.computed(function () {
                var pagesize = parseInt(self.PageSize().toString(), 10),
                    startIndex = pagesize * self.CurrentPageIndex(),
                    endIndex = startIndex + pagesize;   
                return  self.Items();
            });
        }
        //следующая страница
        NextPage = function () {
            if (((this.CurrentPageIndex() + 1) * this.PageSize()) < this.Items().length) {
              
                this.CurrentPageIndex(this.CurrentPageIndex() + 1);
            }
            else {
                this.currentPageIndex(0);
            }  
        };
        //предыдущая страница
        PreviousPage = function () {
            if (this.CurrentPageIndex() > 0) {
                this.CurrentPageIndex(this.CurrentPageIndex() - 1);
            }
            else {
                this.CurrentPageIndex((Math.ceil(this.Items().length / this.PageSize)) - 1);
            }
        };
    }
}