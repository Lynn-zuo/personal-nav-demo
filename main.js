var keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]
var hash = {
    '1': '12306.cn', '2': '163.com', '3': undefined, '4': undefined, '5': undefined,
    '6': undefined, '7': undefined, '8': undefined, '9': undefined, '0': undefined,
    'q': 'qzone.qq.com', 'w': undefined, 'e': undefined, 'r': undefined, 't': undefined,
    'y': 'youdao.com', 'u': undefined, 'i': undefined, 'o': undefined, 'p': undefined,
    'a': undefined, 's': undefined, 'd': undefined, 'f': undefined, 'g': 'github.com',
    'h': undefined, 'j': undefined, 'k': undefined, 'l': undefined,
    'z': undefined, 'x': undefined, 'c': undefined, 'v': undefined, 'b': 'baidu.com', 
    'n': 'nowcoder.com','m': 'meituan.com',
}
// 取出localStorage中的update_website对应的hash
hashInLocalStorage = JSON.parse(localStorage.getItem('update_website') || 'null')
if (hashInLocalStorage){
    hash = hashInLocalStorage
}

// 遍历keys，生成kbd标签
var i = 0;
console.log(keys.length);
while(i < keys.length){
    divX = document.createElement('div');
    divXXX.appendChild(divX);
    var j=0;
    while(j < keys[i].length){
        kbdX = document.createElement('kbd');
        buttonXE = document.createElement('button');
        //buttonXD = document.createElement('button');
        kbdX.textContent = keys[i][j];
        // kbdX.id = keys[i][j];
        // kbdX.onclick = function(keyb){
        //     console.log(kbdX.id)
        //     keyi = keyb['key']
        //     website = hash[keyi];
        //     // location.href = 'http://' +  website;
        //     window.open('http://' +  website, '_blank');
        // }
        buttonXE.textContent = 'E';
        //buttonXD.textContent = 'D';
        buttonXE.id = keys[i][j];
        buttonXE.onclick = function(keyd){
            // keyd.target是用户点击的元素
            console.log(keyd.target.id)
            keyX = keyd.target.id
            new_website = prompt('给我一个网址')
            hash[keyX] = new_website // hash变更
            localStorage.setItem('update_website', JSON.stringify(hash));
            console.log(hash)
        }
        divX.appendChild(kbdX);
        kbdX.appendChild(buttonXE);
        //kbdX.appendChild(buttonXD);
        j+=1
    }
    i+=1;
}

// 按键打开对应网页
document.onkeypress = function(keyb) {
    console.log('我按下了一个键')
    keyi = keyb['key']
    website = hash[keyi];
    // location.href = 'http://' +  website;
    window.open('http://' +  website, '_blank');
}