export default async function fetchList() {
    const apiURL = "./fruits.json";

    const response = await fetch(apiURL);
    console.log(response);
    //const data = await response.json();
    
    console.log(data);
}