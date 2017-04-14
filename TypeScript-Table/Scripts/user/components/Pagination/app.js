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
                    this.CurrentPageIndex(this.CurrentPageIndex() + 1);
                };
                //предыдущая страница
                this.PreviousPage = function () {
                    if (this.CurrentPageIndex() > 0) {
                        this.CurrentPageIndex(this.CurrentPageIndex() - 1);
                    }
                    else {
                    }
                };
                this.Items = items;
                this.PageSize = ko.observable(5);
                this.CurrentPageIndex = ko.observable(0);
                var self = this;
                this.CurrentPage = ko.computed(function () {
                    if (!self.Items)
                        return [];
                    var pagesize = parseInt(self.PageSize().toString(), 10), startIndex = pagesize * self.CurrentPageIndex(), endIndex = startIndex + pagesize;
                    return self.Items().slice(startIndex, endIndex);
                });
            }
            return Pagination;
        }());
        Component.Pagination = Pagination;
    })(Component = exports.Component || (exports.Component = {}));
    var UrlDeleteUser = '/home/DeleteUser/';
});
//# sourceMappingURL=app.js.map