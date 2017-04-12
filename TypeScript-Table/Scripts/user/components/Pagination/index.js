define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    /**
     * Компоненты
     */
    var Component;
    (function (Component) {
        /**
         * Пагинация таблицы
         */
        var Pagination = (function () {
            function Pagination(items) {
                //следующая страница
                this.NextPage = function () {
                    if (((this.CurrentPageIndex() + 1) * this.PageSize()) < this.Items().length) {
                        this.CurrentPageIndex(this.CurrentPageIndex() + 1);
                    }
                    else {
                        this.currentPageIndex(0);
                    }
                };
                //предыдущая страница
                this.PreviousPage = function () {
                    if (this.CurrentPageIndex() > 0) {
                        this.CurrentPageIndex(this.CurrentPageIndex() - 1);
                    }
                    else {
                        this.CurrentPageIndex((Math.ceil(this.Items().length / this.PageSize)) - 1);
                    }
                };
                this.Items = items;
                this.CurrentPage = ko.observableArray([]);
                this.PageSize = ko.observable('5');
                this.CurrentPageIndex = ko.observable(0);
                var self = this;
                this.CurrentPage = ko.computed(function () {
                    if (!self.Items)
                        return [];
                    var pagesize = parseInt(self.PageSize().toString(), 10), startIndex = pagesize * self.CurrentPageIndex(), endIndex = startIndex + pagesize;
                    console.log('self.Items', self.Items());
                    return self.Items();
                });
            }
            return Pagination;
        }());
        Component.Pagination = Pagination;
    })(Component = exports.Component || (exports.Component = {}));
});
//# sourceMappingURL=index.js.map