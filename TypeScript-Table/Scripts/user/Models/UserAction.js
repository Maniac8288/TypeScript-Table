define(["require", "exports"], function (require, exports) {
    "use strict";
    var Models;
    (function (Models) {
        var UserAction = (function () {
            function UserAction() {
            }
            UserAction.prototype.removeUser = function (user) {
                $.ajax({
                    url: UrlDeleteUser + user.Id,
                    type: 'post',
                    contentType: 'application/json',
                    success: function () {
                    }
                });
            };
            ;
            return UserAction;
        }());
        Models.UserAction = UserAction;
    })(Models = exports.Models || (exports.Models = {}));
    var UrlDeleteUser = '/home/DeleteUser';
});
//# sourceMappingURL=UserAction.js.map