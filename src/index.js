import * as Keychain from 'react-native-keychain';

// Using v4 due to: https://github.com/oblador/react-native-keychain/issues/316
export function createEncryptedStorage() {
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
