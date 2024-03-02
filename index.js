function getData()
{



	const city = search.value;
	
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a660d290e2msh2e042d02786688ep1e04f0jsnbebe218b99f1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city ,options)
	.then(response => response.json())
	.then(res => {
		console.log(res);
		temp.innerHTML = res.temp;
		speed.innerHTML = res.wind_speed;
		hmd.innerHTML = res.humidity;
	})
	.catch(err => console.log(err));







}