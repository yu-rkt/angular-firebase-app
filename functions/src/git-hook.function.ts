import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const gitHook = functions.https.onRequest(async (request, response) => {
  const pets = await db
    .collection('pets')
    .where('ownerGitHubId', '==', request.body.sender.id)
    .get();

  const increment = admin.firestore.FieldValue.increment(10);
  pets.docs.forEach((docs) =>
    docs.ref.update({
      exp: increment,
    })
  );
  response.send('success!');
});
