import ASCClient, { ConnectionStatus, ApiEndpoint } from "@amityco/js-sdk";

// Amity sample-app apiKey
const apiKey = "b0eeee5e3fd8f76d1932851f5709168884008ee0e8353b7f";
export const client = ASCClient.create({ apiKey, apiEndpoint: ApiEndpoint.US });

export let currentUserId = null;

// promisified client connection
export const connectClient = async (userId) => {
  return new Promise((resolve) => {
    client.on("connectionStatusChanged", ({ newValue }) => {
      if (newValue === ConnectionStatus.Connected) {
        currentUserId = userId;
        resolve();
      }
    });

    client.registerSession({ userId });
  });
};
