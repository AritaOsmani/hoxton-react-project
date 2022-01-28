
export default function CurrentWeather({ weatherData, isCelcius, setIsCelcius }) {
    //  if (weatherData === undefined) return <h1>Loading...</h1>
    const currentData = weatherData.current;
    const locationData = weatherData.location;

    return <div className='current-container'>
        <h1>{`${locationData.name}, ${locationData.country}`}</h1>
        <div className='temp-info'>
            <img className='icon' src={currentData.condition.icon} alt="" />
            <span className='temp'>{isCelcius ? `${currentData['temp_c']}°` : `${currentData['temp_f']}°`}</span>
            <div className='button-container'>
                <button className={isCelcius ? 'selected-btn' : 'celcius-btn'} onClick={() => {
                    setIsCelcius(true)
                }}
                >C</button>
                <button onClick={() => {
                    setIsCelcius(false)
                }}
                    className={isCelcius ? 'fahrenheit-btn' : 'selected-btn'}>F</button>
            </div>

        </div>
        <span className='condition-text'>{currentData.condition.text}</span>
        <span className='time-since-updated'> <b>Last updated:</b> {currentData['last_updated']}</span>
        <div className='additional-info'>
            <span> <b>Feels like:</b> {isCelcius ? `${currentData['feelslike_c']}°` : `${currentData['feelslike_f']}°`}</span>
            <span> <b>Wind:</b> {currentData['wind_kph']} km/h</span>
            <span> <b>Visibility:</b> {currentData['vis_km']}km</span>
            <span> <b>Humidity:</b> {currentData.humidity}%</span>
            <span> <b>Cloud:</b> {currentData.cloud}%</span>
        </div>
    </div>;
}
