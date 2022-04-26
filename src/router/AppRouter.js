import React, { useEffect, useState, useCallback} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddPo from '../components/AddPo';
import EditPo from '../components/EditPo';
import PoList from '../components/PoList';

const remoteAppClient = new window.__LIFERAY_REMOTE_APP_SDK__.Client({debug: true});


const AppRouter = () => {

  const getSiteGroupId = () => {
		remoteAppClient.get('siteGroupId')
		.then((value) => {
			setSiteGroupId(value)
		});
	};

  useEffect(() => {
		getSiteGroupId();
	}, []);

  /*const [books, setBooks] = useLocalStorage('books', []);*/
  const [books, setBooks] = useState();
  const [siteGroupId, setSiteGroupId] = useState();

  const getBooks = useCallback(() => {
		remoteAppClient.fetch(
			`/o/c/purchaseorders/scopes/${siteGroupId}`)
		.then((response) => response.json())
		.then(({items}) => setBooks(items));
	}, [siteGroupId]);

  useEffect(() => {
		if (siteGroupId) {
			getBooks();
		}
	}, [getBooks, siteGroupId])


//http://localhost:8080/o/c/purchaseorders/scopes/39507
  return (
    <BrowserRouter>
      <div>
        <Header />{siteGroupId}
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