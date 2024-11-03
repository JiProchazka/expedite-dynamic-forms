export default function useFakeApi() {
  function loadData(): Promise<{ data: object }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            name: "John Doe",
            address: "App Street, USA, 12345",
            message: "This is a message loaded from a fake API",
            city: "new-work",
            terms: true
          }
        });
      }, 500);
    });
  }

  function saveData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(200);
      }, 500);
    });
  }

  function fakeError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Error");
      }, 500);
    });
  }

  return { loadData, saveData, fakeError }
}
