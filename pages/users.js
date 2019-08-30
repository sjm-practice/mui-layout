import React from "react";

import { Main as MainLayout } from "../src/layouts";
// TODO make alias for views folder
import { UserList } from "../src/views";

const AccountPage = () => (
  <MainLayout>
    <UserList />
  </MainLayout>
);

export default AccountPage;
