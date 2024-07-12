import { cars } from "../data/cars-data";
import ImgSlider from "./ImgSlider";

function CarPost() {
  return (
    <>
      <ImgSlider />
      <div>Description: Nu bate nu troncane</div>
      <span>11.07.2024</span>
      <span>Bucharest</span>
      <h1>Car Specs</h1>
      <div>
        <ul>
          <li>Name: Ford</li>
          <li>Model: Focus</li>
          <li>Version: MK3</li>
          <li>Year: 2015</li>
          <li>Engine: 2.0 TDI</li>
          <li>Fuel: Diesel</li>
          <li>Body: Hatchback</li>
          <li>Transmission: Manual</li>
          <li>Gears: 5</li>
          <li>Color: Blue</li>
          <li>Seats: 5</li>
          <li>Doors: 5</li>
          <li>Milleage: 90432 km</li>
          <li>Power: 120 CP</li>
          <li>Mpg: 10</li>
          <li>Price: 7000</li>
          <li>Emmision Standard: Euro 5</li>
        </ul>
        <div>
          <span>+1 (139) 636-2286</span>
          <button>Reveal phone number</button>
        </div>
      </div>
    </>
  );
}

export default CarPost;
