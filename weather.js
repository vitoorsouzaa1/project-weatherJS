class Weather {
  constructor(city, country) {
    this.apiKey = '6b97c08a4e6554792606b16795e059ad';
    this.city = city;
    this.country = country;
  }

  //   Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();
    return responseData;
  }

  //   Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
