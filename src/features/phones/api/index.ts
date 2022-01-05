import {PhoneState} from "../redux/reducer";

export async function fetchPhones(): Promise<PhoneState[]> {
    const response = await fetch("./phones.json");
    return await response.json();
}