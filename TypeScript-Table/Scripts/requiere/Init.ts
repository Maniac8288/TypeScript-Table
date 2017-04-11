/// <reference path="../components/user/add/index.ts" />
/// <reference path="../components/user/table/index.ts" />
import Component = require("components/user/table/index");

// register the component
ko.components.register("Add-User", {
    viewModel: Component.AddUser,
    template: { require: "text!components/user/add/template/template.html" }
});



// register the component
ko.components.register("Table-Users", {
    viewModel: Component.ItemViewModel,
    template: { require: "text!components/user/table/template/template.html" }
});