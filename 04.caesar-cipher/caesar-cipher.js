export function caesarCipher(str, shift) {
    if(shift > 25 || shift < -25){
        shift = shift % 26;
    } 

    let caesarCipherArr = str.split("").map(item => {  // B -2
        let charCode = item.charCodeAt(0);
        if(charCode < 65 || 
            (charCode > 90 && charCode < 97) || 
            charCode > 122) return item;

        let newCode = charCode + shift //63
        if(item >= "A" && item <= "Z"){
            let startCode = 65;  
            let endCode = 90;
            if(newCode > endCode){
                let skipVal = newCode - endCode;
                return String.fromCharCode(startCode + skipVal - 1);
            }
            if(newCode < startCode) {
                let skipVal = startCode - newCode; 
                return String.fromCharCode(endCode - skipVal + 1); 
            }
        }
        if(item >= "a" && item <= "z"){ 
            let startCode = 97;  
            let endCode = 122;
            if(newCode > endCode){
                let skipVal = newCode - endCode;
                return String.fromCharCode(startCode + skipVal - 1);
            }
            if(newCode < startCode) {
                let skipVal = startCode - newCode
                return String.fromCharCode(endCode - skipVal + 1);
            }
        }
        return String.fromCharCode(newCode);
    });
    
    let caesarCipherStr = caesarCipherArr.join("");
    console.log(caesarCipherStr);
    return caesarCipherStr;
}

caesarCipher("abc", 3);

