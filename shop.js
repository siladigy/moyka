window.onload = function(){
    let getJSON = function(url, callback){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function (){
            let status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response)
            }
            else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    }

    getJSON('https://docs.google.com/feeds/list/1GFXZv6iBK-6GOb8nQyQ3QYEhrvEkDpAQr9Y9vPJibRc/od6/public/values?alt=json', function(data){
         console.log(data);
    });
}