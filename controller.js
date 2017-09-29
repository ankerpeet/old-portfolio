function Controller() {
    var service = new Service();
    message = function (res) {
        document.getElementById("response").innerHTML = res;
    }
    this.sendMessage = function (event) {
        event.preventDefault();
        if (event.target.email.value.indexOf("@") != -1 && event.target.email.value.indexOf(".") != -1) {
            //console.log("EVENT: ", event)
            var searchObj = {
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value
            }
            service.sendMessage(searchObj, message);
            document.getElementById("myForm").reset();
        }
        else {
            message("Please enter a valid email address.");
        }
    }
}
