import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem('usuario', JSON.stringify(user));
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};