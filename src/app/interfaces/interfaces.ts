export interface Weather {
    coord: {};
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string; 
    }];
    base: string; 
    main: {
        temp: number;
        feels_like: number;
        temp_min: number; 
        temp_max: number; 
        pressure: number; 
        humidity:number ;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number; 
    }; 
    clouds: {
        all: number;
    };
    rain?:{}; 
    snow?:{};
    dt: number;
    sys: {};
    timezone: number; 
    id: number; 
    name: string;
    cod: number; 
}

export interface Location {
    name: string;
    local_names?: {};
    lat: number;
    lon: number;
    country: string; 
    state?: string; 
}

