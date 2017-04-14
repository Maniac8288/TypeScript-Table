define(["require", "exports", "knockout", "user/Models/UsersModels"], function (require, exports, ko, UserModels) {
    "use strict";
    var Component;
    (function (Component) {
        var EditUserTable = (function () {
            function EditUserTable(Display) {
                this.Display = ko.observable(Display);
                this.User = new UserModels.Models.UserModel();
            }
            return EditUserTable;
        }());
        Component.EditUserTable = EditUserTable;
    })(Component = exports.Component || (exports.Component = {}));
});
//# sourceMappingURL=app.js.map