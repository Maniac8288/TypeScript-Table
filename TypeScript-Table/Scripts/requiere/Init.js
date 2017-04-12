define(["require", "exports", "user/components/table/index", "user/components/add/index", "user/components/Pagination/index"], function (require, exports, Table, Users, Page) {
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
});
//# sourceMappingURL=Init.js.map