var encrypted = CryptoJS.AES.encrypt("Info", "Private Passphrase");

var decrypted = CryptoJS.AES.decrypt(encrypted, "Private Passphrase");


document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);

console.log("Encrypted: ", encrypted); console.log("Decrypted: ", decrypted.toString(CryptoJS.enc.Utf8));
