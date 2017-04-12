export namespace Models {
    export class UserModel {
        public Id: KnockoutObservable<number>;
        public FirstName: KnockoutObservable<string>;
        public LastName: KnockoutObservable<string>;
        constructor(id?: number, firstName?: string, lastName?: string) {
            this.Id = ko.observable(id);
            this.FirstName = ko.observable(firstName);
            this.LastName = ko.observable(lastName);
        }
    }
}