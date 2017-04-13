define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var Models;
    (function (Models) {
        var UserModel = (function () {
            function UserModel(id, firstName, lastName) {
                this.Id = ko.observable(id);
                this.FirstName = ko.observable(firstName);
                this.LastName = ko.observable(lastName);
            }
            return UserModel;
        }());
        Models.UserModel = UserModel;
    })(Models = exports.Models || (exports.Models = {}));
});
//# sourceMappingURL=UsersModels.js.map