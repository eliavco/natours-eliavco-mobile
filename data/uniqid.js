// import DeviceInfo from 'react-native-device-info';
// cant use it yet without ejecting
// npm i react-native-device-info
// DeviceInfo.getUniqueId();

export default uniqid = (prefix) => {
    const id = `${Date.now()}-${Math.random()}`;
    return `${prefix}${id}`;
};