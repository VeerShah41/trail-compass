import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "pins";

export async function savePins(pins) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(pins));
  } catch (e) {
    console.error(e);
  }
}

export async function loadPins() {
  try {
    const json = await AsyncStorage.getItem(KEY);
    return JSON.parse(json)
  } catch (e) {
    console.error(e)
  }
}
