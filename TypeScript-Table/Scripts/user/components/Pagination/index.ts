
import ko = require("knockout");

 
/**
 * Компоненты
 */
export namespace Component {
    /**
     * Пагинация таблицы
     */
    export class Pagination {
       
        CurrentPage: any;
        PageSize: KnockoutObservable<number>;
        CurrentPageIndex: KnockoutObservable<number>;
        Items: KnockoutObservableArray<any>;
        constructor(items: KnockoutObservableArray<any>) {
            
            this.Items = items;
            this.CurrentPage = ko.observableArray([]);
            this.PageSize = ko.observable(5);
            this.CurrentPageIndex = ko.observable(0);
            var self = this;
            this.CurrentPage = ko.computed(function () {
                if (!self.Items) return [];
                var pagesize = parseInt(self.PageSize().toString(), 10),
                    startIndex = pagesize * self.CurrentPageIndex(),
                    endIndex = startIndex + pagesize;
              
                return self.Items.slice(startIndex, endIndex);
            });
        }
        //следующая страница
        NextPage = function () {

          
            this.CurrentPageIndex(this.CurrentPageIndex() + 1);
           
       
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