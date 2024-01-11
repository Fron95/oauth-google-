const myForm = document.getElementById("myform");

function encodeFormData(data) {
    return Array.from(data)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

async function getInfo(event) {
    event.preventDefault(); // 폼의 기본 제출 동작 방지

    const formData = new FormData(this); // 폼 데이터 가져오기
    const encodedData = encodeFormData(formData); // URL 인코딩

    // fetch 요청
    fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));



}

myForm.addEventListener("submit", getInfo);
