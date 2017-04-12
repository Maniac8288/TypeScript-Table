
import Table = require("user/components/table/index");
import Users = require("user/components/add/index");
import Page = require("user/components/Pagination/index");
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