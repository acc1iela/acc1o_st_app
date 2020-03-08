// c47a08656c60d877ad2538578406f33ad66e2e93
//https://l0lnp1f6p2.execute-api.ap-northeast-1.amazonaws.com/default/extend_qiita_api?token=c47a08656c60d877ad2538578406f33ad66e2e93&page=1&per_page=20
const req = new XMLHttpRequest();

open('GET', '/api/v2/authenticated_user/items?page=1&per_page=20 HTTP/1.1', true);

ajax({
  url: 'https://qiita.com',
  type: 'GET',
  dataType: 'json',
});
