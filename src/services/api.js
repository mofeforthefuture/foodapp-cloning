const BASE_URL = "https://test.finratus.com";
const MYXALARY_URL = "https://myxalary.finratus.com:444/v1"


export async function getRequest(url) {
    const request = await fetch(`${MYXALARY_URL}${url}`)
        .then(response => response.json())
    console.log(request);
    return request;
}

