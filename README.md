# redux-persist-keychain-storage

Storage engine for [`redux-persist`](https://github.com/rt2zz/redux-persist),
which can store sensitive data on the iOS/Android Keychain/Keystore,
by wrapping [`react-native-keychain`](https://github.com/oblador/react-native-keychain).

## Installation

You should install [`react-native-keychain`](https://github.com/oblador/react-native-keychain) alongside this library.
For now, v4 is recommended, as v5 on Android requires biometrics to access biometrics
(see https://github.com/oblador/react-native-keychain/issues/316),
which doesn't allow for a seamless experience when rehydrating the store.

```bash
$ yarn add redux-persist-keychain-storage react-native-keychain@^4.0.5
```

## Usage

### Persist reducer data on the keychain

The simplest way to use this library is in the default mode,
where it stores the reducer data directly in the keychain.

**There's a limit to the amount of data that can stored this way**,
so it's recommended to only use this with very minimal reducers,
e.g. one that just stores key authentication data.

```js
import { createEncryptedStorage } from 'redux-persist-keychain-storage';

const encryptedStorage = createEncryptedStorage();

const persistConfig = {
  // Keychain expects a reverse domain name qualifier (app bundle ID) style key
  keyPrefix: 'com.myapp.',
  storage: encryptedStorage,
};

const mainReducer = combineReducers({
  token: persistReducer({ ...persistConfig, key: 'token' }),
});
```

### Persist encryption key on the keychain, reducer data encrypted on AsyncStorage

*To be implement*