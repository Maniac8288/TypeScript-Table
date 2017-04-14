/// <reference path="typings/knockout/knockout.d.ts" />

import Table = require("user/components/table/app");
import Users = require("user/components/add/app");
import Page = require("user/components/Pagination/app");
import Edit = require("user/components/Edit/app");
import ko = require("knockout");
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