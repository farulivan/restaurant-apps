// import NotificationHelper from './notification-helper';
// import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    // eslint-disable-next-line no-unused-vars
    const webSocket = new WebSocket(url);
    // webSocket.onmessage = this._onMessageHandler;
  },

  //   _onMessageHandler(message) {
  //     const restaurant = JSON.parse(message.data);

  //     // NotificationHelper.sendNotification({
  //     //   title: `${restaurant.title} is on cinema!`,
  //     //   options: {
  //     //     body: restaurant.overview,
  //     //     image: `${CONFIG.BASE_IMAGE_URL + restaurant.poster_path}`,
  //     //   },
  //     // });
  //   },
};

export default WebSocketInitiator;
