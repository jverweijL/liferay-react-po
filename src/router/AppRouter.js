import React, { useEffect, useState, useCallback} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddPo from '../components/AddPo';
import EditPo from '../components/EditPo';
import PoList from '../components/PoList';

const remoteAppClient = new window.__LIFERAY_REMOTE_APP_SDK__.Client({debug: true});

const AppRouter = () => {

  const [books, setBooks] = useState();
  const [roles, setUserRoles] = useState();
  const [siteGroupId, setSiteGroupId] = useState();

  const getSiteGroupId = () => {
		remoteAppClient.get('siteGroupId')
		.then((value) => {
			setSiteGroupId(value)
		});
	};

  const getBooks = useCallback(() => {
		remoteAppClient.fetch(
			`/o/headless-commerce-admin-order/v1.0/orders`)
		.then((response) => response.json())
		.then(({items}) => setBooks(items));
	}, []);

  const getUserRoles = useCallback(() => {
    remoteAppClient.fetch(
			`/o/headless-admin-user/v1.0/my-user-account`)
		.then((response) => response.json())
		.then(({roleBriefs}) => setUserRoles(roleBriefs));

  },[]);

  useEffect(() => {
		getSiteGroupId();
	}, []);

  useEffect(() => {
		if (siteGroupId) {
			getBooks();
		}
	}, [getBooks, siteGroupId]);

  useEffect(() => {
		if (siteGroupId) {
      getUserRoles();
		}
	}, [getUserRoles, siteGroupId]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <PoList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddPo {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditPo {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;