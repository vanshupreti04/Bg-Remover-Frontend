import video_banner from './video_banner.mp4';
import people from './people.png';
import people_org from './people-org.png';
import car from './car.png';
import car_org from './car-org.png';

export const assets = {
    video_banner,
    people,
    people_org,
    car,
    car_org
};

export const plans = [
    {
        id: "basic",
        name: "Basic Package",
        price: 199,
        credits: 100,
        description: "Perfect for small projects and occasional exports",
        popular: false
    },
    {
        id: "premium",
        name: "Premium Package",
        price: 399,
        credits: 250,
        description: "Great for regular users and medium-sized projects",
        popular: true
    },
    {
        id: "ultimate",
        name: "Ultimate Package",
        price: 699,
        credits: 1000,
        description: "Ideal for power users and large-scale exports",
        popular: false
    }
];