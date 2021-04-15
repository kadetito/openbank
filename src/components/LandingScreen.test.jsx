import React from "react";
import renderer from "react-test-renderer";
import { LandingScreen } from "./LandingScreen";

test("Snapshot de la página landing", () => {
  const component = renderer.create(<LandingScreen />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
