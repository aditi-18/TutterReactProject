import { createTuit, deleteTuit,  findTuitById, findAllTuits,deleteTuitByContent } from "../services/tuits-service.js";
import {
  createUser,deleteUsersByUsername, findAllUsers, findUserById} from "../services/users-service.js";

describe('can create tuit with REST API', () => {

  const userTest = {
    username: 'natasha',
    password: 'nat23',
    email: 'natsha@gmail.com'
  };
  const tuitTest = {
    tuit: 'Test tuit'
  };

  // setup test before running test
  beforeAll(() => {
    // remove all users to make sure we create it in the test
    return deleteUsersByUsername(userTest.username) && deleteTuitByContent(tuitTest.tuit);
  })

  // clean up after test runs
  afterAll(() => {
    return deleteUsersByUsername(userTest.username) && deleteTuitByContent(tuitTest.tuit);
  })

  test('can insert new tuits with REST API', async () => {

    // insert user 
    const newUserTest = await createUser(userTest);

    // verify new user matches the parameter user
    expect(newUserTest.username).toEqual(userTest.username);
    expect(newUserTest.password).toEqual(userTest.password);
    expect(newUserTest.email).toEqual(userTest.email);

    // insert tuit 
    const newTestTuit = await createTuit(newUserTest._id, tuitTest);
    expect(newTestTuit.tuit).toEqual(tuitTest.tuit);
  });
});


describe('can delete tuit wtih REST API', () => {

  const userTest = {
    username: 'natasha',
    password: 'nat23',
    email: 'natsha@gmail.com'
  };
  const tuitTest = {
    tuit: 'Test tuit'
  };

  const newLocal = "test";
  let dummytestUser = newLocal;
  let newDummyTuit = "test";
  // setup test before running test
  beforeAll(async () => {
    await newFunction();
    newDummyTuit = await createTuit(dummytestUser._id, tuitTest);

    async function newFunction() {
      dummytestUser = await createUser(userTest);
    }
  })

  afterAll(() => {
    // remove any data we created
    newFunction_1();
    return deleteUsersByUsername(userTest.username);

    function newFunction_1() {
      deleteTuitByContent(tuitTest.tuit);
    }
  })

  test('can delete users from REST API by username', async () => {
    // delete a user by using their username
    const res = await deleteTuitByContent(tuitTest.tuit);

    // verifying record deletition
    expect(res.deletedCount).toBeGreaterThanOrEqual(1);
  });

});

describe('can retrieve a tuit by their primary key with REST API', () => {
  const userTest = {
    username: 'natasha',
    password: 'nat23',
    email: 'natsha@gmail.com'
  };

  const tuitTest = {
    tuit: 'Test tuit'
  };

  let dummyTestUser = "test";
  let newTTestuit = "test";

  beforeAll(async () => {
    dummyTestUser = await createUser(userTest);
    newTTestuit = await createTuit(dummyTestUser._id, tuitTest);
  })

  // clean up after test runs
  afterAll(() => {

    deleteTuitByContent(tuitTest.tuit);
    return deleteUsersByUsername(userTest.username);
  })

  test('can retrieve a tuit by their primary key with REST API', async () => {
    const retrieveTuit = await findTuitById(newTTestuit._id);

    expect(retrieveTuit.tuit).toEqual(tuitTest.tuit);
  });

});

describe('can retrieve all tuits with REST API', () => {
  const tuitCollection = ["tuitTest", "tuitNew", "tuitOld", "tuitCurrent"]
  
  const userTest = {
    username: 'natasha',
    password: 'nat23',
    email: 'natsha@gmail.com'
  };

  
 const newLocal = newFunction();
  let dummyTestUser = newLocal;
  beforeAll(async () => {
    // remove all users to make sure we create it in the test
    dummyTestUser = await createUser(userTest);
    tuitCollection.map(function (tuit) {
        return createTuit(dummyTestUser._id,
          {
            tuit: tuit,
          });
      }
    )
  })
  // clean up after test runs
  afterAll(() => {
    tuitCollection.map(tuit =>
      deleteTuitByContent(tuit)
    )
    return deleteUsersByUsername(userTest.username);
  })

  test('can retrieve all tuits with REST API', async () => {
    const tuitCollection = await findAllTuits();

    newFunction_1();
    const insertedTuit = tuitCollection.filter(
      tuit => tuitCollection.indexOf(tuit.tuit) >= 0);

      insertedTuit.forEach(tuit => {
      const tuitIdentity = newFunction_2(tuitCollection, tuit);
      expect(tuit.tuit).toEqual(tuitIdentity);
    });

    function newFunction_1() {
      expect(tuitCollection.length).toBeGreaterThanOrEqual(tuitCollection.length);
    }
  });


  function newFunction() {
    return "";
  }
});

function newFunction_2(tuitCollection, tuit) {
  return tuitCollection.find(tuitIdentity => tuitIdentity === tuit.tuit);
}
