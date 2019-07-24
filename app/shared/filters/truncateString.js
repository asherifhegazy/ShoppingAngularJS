eShopApp.filter('truncateStr',function () {
    return function (txt,numOfChars) {
        if(txt.length > numOfChars){
            return txt.substr(0,numOfChars);
        }

        return txt;
    }
});