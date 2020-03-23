import * as Keychain from 'react-native-keychain';

export function createKeychainStorage() {
  return {
    async getItem(key) {
      const credentials = await Keychain.getGenericPassword({ service: key });
      if (!credentials) {
        return null;
      }
      return credentials.password;
    },
    async setItem(key, item) {
      await Keychain.setGenericPassword('data', item, {
        service: key,
      });
    },
    async removeItem(key) {
      await Keychain.resetGenericPassword({ service: key });
    },
  };
}
