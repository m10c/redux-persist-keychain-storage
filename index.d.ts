type StorageApi = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, item: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

export function createKeychainStorage(): StorageApi;
