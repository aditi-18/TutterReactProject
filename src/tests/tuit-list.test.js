/* eslint-disable no-undef */
import Tuits from "../components/tuits/index";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

const MOCKED_TUITS = [

  {tuit: "Alice's tuit", postedBy: "6202985d5b613a1f18dd2239", postedOn: "2022-03-15T13:50:07.058Z"},
  {tuit: "Ben's tuit", postedBy:"6202985d5b613a1f18dd223a", postedOn: "2022-03-15T13:50:54.252Z"},
  {tuit: "Aditi's tuit", postedBy:"621275205086e79f4de5e4d1", postedOn: "2022-03-15T13:51:25.072Z"},
];

test('tuit list renders static tuit array', () => {
  render(
    <HashRouter>
      <Tuits tuits={MOCKED_TUITS}/>
    </HashRouter>
  );
  const testA = screen.getByText(/Alice's tuit/i);
  const testB = screen.getByText(/Ben's tuit/i);
  const testC = screen.getByText(/Aditi's tuit/i);
  expect(testA).toBeInTheDocument();
  expect(testB).toBeInTheDocument();
  expect(testC).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  const tuits = await findAllTuits();
  render(
    <HashRouter>
      <Tuits tuits={tuits}/>
    </HashRouter>
  );
  const linkTest= screen.getByText(/Alice's tuit/i);
  const linkTestA = screen.getByText(/Russia war with Ukraine/i);
  expect(linkTest).toBeInTheDocument()
 expect(linkTestA).toBeInTheDocument()

});

test('tuit list renders mocked', async () => {

  const mock = jest.spyOn(axios, 'get');
  mock.mockImplementation(() =>
  Promise.resolve({ data: {tuits: MOCKED_TUITS} }));
  const response = await findAllTuits();
  const tuits = response.tuits;

  render(
    <HashRouter>
      <Tuits tuits={tuits}/>
    </HashRouter>
  );

  const linkElement = screen.getByText(/Alice's tuit/i);
  expect(linkElement).toBeInTheDocument();
  mock.mockRestore();

});














































