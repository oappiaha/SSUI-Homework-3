// home.html
// function saveData(user, pass) {
//    var account = {
//      User: user,
//      Pass: pass
//    };
//    //converts to JSON string the Object
//    account = JSON.stringify(account);
//    //creates a base-64 encoded ASCII string
//    account = btoa(account);
//    //save the encoded accout to web storage
//    localStorage.setItem('_account', account);
// }
// index.html




function saveData(title, img) {
   var item = {
      title: title,
      image: img
   };
   item = JSON.stringify(item);
   item = btoa(item);
   localStorage.setItem('_item', item);
}

