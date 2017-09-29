var Service = function () {
    var url = "//localhost:3000"
    this.sendMessage = function(message, cb){
        $.post(url + '/api/messages', message)
        .then(res => {
            cb(res)
        }).fail(err => {
            cb("Failed to send.")
        })
    }
} 