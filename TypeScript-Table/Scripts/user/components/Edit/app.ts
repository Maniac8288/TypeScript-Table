/// <reference path="../../../typings/jquery/jquery.d.ts" />
import ko = require("knockout");

import UserModels = require("user/Models/UsersModels");
export namespace Component {
    export class EditUserTable {
        User: UserModels.Models.UserModel;
        Display: KnockoutObservable<boolean>
        constructor(Display: boolean) {
            this.Display = ko.observable(Display);
            this.User = new UserModels.Models.UserModel();
           
        }
      

    }
}
