/* eslint-disable  */
const firebase = require('./firebase');

exports.sendPushNotification = async function (
  title,
  details,
  toUserID,
  screen = false
) {
  try {
    const fmts = [];

    const messages = {
      data: {
        unreadCount: '1',
      },
      notification: {
        title,
        body: details,
      },
      android: {
        ttl: 3600 * 1000,
        priority: 'high',
        notification: {
          click_action: 'FLUTTER_NOTIFICATION_CLICK',
        },
        data: {
          unreadCount: '1',
        },
      },
      apns: {
        headers: {
          'apns-priority': '10',
        },
        payload: {
          aps: {
            badge: 1,
            mutableContent: 1,
            sound: 'default',
          },
        },
        fcmOptions: {
          //   image: media != null ? media : "",
        },
      },
      tokens: fmts,
    };
    firebase
      .messaging()
      .sendMulticast(messages)
      .then((response) => {
        console.log(response);
        return { error: null, data: { status: 'ok', statusCode: 200 } };
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
