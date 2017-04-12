
import Table = require("components/user/table/index");
import Users = require("components/user/add/index");
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