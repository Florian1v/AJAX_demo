//const { getMaxListeners } = require("process");

//const { getPackedSettings } = require("http2");

//获取css
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');//readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        //下载完成，但不知道是成功2xx还是失败4xx 5xx
        if(request.readyState ===4) {
            if(request.status >= 200 && request.status <300) {
                //创建style标签
                const style = document.createElement('style');
                //填写style内容
                style.innerHTML = request.response;
                //插入<head>
                document.head.appendChild(style);
            }else {
                alert('加载失败')
            }
        }
    }
    request.send(); //readyState = 2
}
//获取JavaScript
getJavaScript.onclick = () => {
    
    const request = new XMLHttpRequest();
    request.open('GET','/getJavaScript.js');
    request.onload = () => {
        //创建script标签
        const script = document.createElement('script');
        //填写script内容
        script.innerHTML = request.response;
        //插入body
        document.body.appendChild(script);
    }
    console.log(2222)
    request.onerror = () =>{};
   request.send();
};
//获取HTML
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/getHTML.html');
    request.onload = () => {
        //创建div标签
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response;
        //插入<body>
        document.body.appendChild(div);
    }
    request.onerror = () =>{}
    request.send();
};
//获取XML
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/getXML.xml');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("message")[0].textContent;
            console.log(text.trim())
        }
    };
    request.send();
}
//请求JSON
getJSON.onclick = () => {
   
    const request = new XMLHttpRequest();
    request.open('GET','/getJSON.json');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response);
            console.log(request.response);
            const bool = JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    }
    
    request.send();
}
//请求下一页
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}`);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li)
            })
            n += 1
        }
    };
    request.send();
}