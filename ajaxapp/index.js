console.log("index.js: loaded");
const heading = document.querySelector("h2");
const headingText = heading.textContent;
const button = document.createElement("button");
button.textContent = "Push Me";
document.body.appendChild(button);

function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);
      // エラーレスポンスが返されたことを検知する
      if (!response.ok) {
        console.error("エラーレスポンス", response);
      } else {
        return response.json().then(userInfo => {
          // JSONパースされたオブジェクトが渡る
          console.log(userInfo);
        });
      }
    }).catch(error => {
      console.log(error);
    });
}

/*
// XMLHttpRequest ver.
function fetchUserInfo(userId) {
  // リクエストの作成
  const request = new XMLHttpRequest();
  request.open("GET", `https://api.github.com/users/${encodeURIComponent(userId)}`);
  request.addEventListener("load", () => {
    //リクエストが成功したかを判定する
    // Fetch APIのresponse.okと同等の意味
    if (request.status >= 200 && request.status < 300) {
      // レスポンス文字列をJSONオブジェクトにパースする
      const userInfo = JSON.parse(request.responseText);
      console.log(userInfo);
    } else {
      console.error("エラーレスポンス", request.statusText);
    }
  });
  request.addEventListener("error", () => {
    console.error("ネットワークエラー");
  });
  // リクエストを処理する
  request.send();
}
*/
