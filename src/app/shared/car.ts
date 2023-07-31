export interface Car {
    $key: string;
    uid: string;
    brand: string;
    model: string;
    engine: string
    gearshift: string;
    euStandard: string;
    color: string;
    month: string
    year: string;
    mileage: Number;
    price: Number;
    imageUrl: string;
    category: string;
    city: string;
    additionalInfo: string;
    // checkArray: Array<[]>;
    ledLights: Boolean,
    electricMirrors: Boolean,
    autoStartStopFunction: Boolean,
    navigation: Boolean,
    fourAllFour: Boolean,
    sunroof: Boolean,
    dvd: Boolean,
    laneAssist: Boolean,
    leatherSalon: Boolean,
    cruiseControl: Boolean,
    twoThreeDoors: Boolean,
    fourFiveDoors: Boolean,
}
