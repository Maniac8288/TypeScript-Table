/// <reference path="typings/knockout/knockout.d.ts" />
define(["require", "exports", "user/components/table/app", "user/components/add/app", "user/components/Pagination/app", "user/components/Edit/app", "knockout"], function (require, exports, Table, Users, Page, Edit, ko) {
    "use strict";
    // register the component
    ko.components.register("Add-User", {
        viewModel: Users.Component.UserTableAdd,
        template: { require: "text!user/components/add/template/template.html" }
    });
    // table the component
    ko.components.register("Table-Users", {
        viewModel: Table.Component.Table,
        template: { require: "text!user/components/table/template/template.html" }
    });
    // table the component
    ko.components.register("Pagination", {
        viewModel: Page.Component.Pagination,
        template: { require: "text!user/components/Pagination/template/template.html" }
    });
    ko.components.register("Edit-User", {
        viewModel: Edit.Component.EditUserTable,
        template: { require: "text!user/components/Edit/template/template.html" }
    });
    ko.applyBindings();
});
//# sourceMappingURL=Init.js.map