define(["require", "exports", "components/user/table/index", "components/user/add/index"], function (require, exports, Table, Users) {
    "use strict";
    // register the component
    ko.components.register("Add-User", {
        viewModel: Users.Component.AddUser,
        template: { require: "text!components/user/add/template/template.html" }
    });
    // table the component
    ko.components.register("Table-Users", {
        viewModel: Table.Component.ItemViewModel,
        template: { require: "text!components/user/table/template/template.html" }
    });
});
//# sourceMappingURL=Init.js.map