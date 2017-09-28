function Controller() {
    var service = new Service();
    this.sendMessage = function (event) {
        event.preventDefault();
        var searchObj = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        }
        service.filterData(searchObj);
    }
}
