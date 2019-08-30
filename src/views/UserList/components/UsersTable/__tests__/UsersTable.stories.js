import React from "react";
import { storiesOf } from "@storybook/react";
import UsersTable from "../index";
import userData from "../../../data";

storiesOf("Views/Components", module).add("UsersTable", () => (
  <UsersTable users={userData} />
));
